/* app.js — Panda Prep quiz logic */
(function () {
  var TOPICS = [
    { id: 'aptitude', name: 'Aptitude', emoji: '\uD83E\uDDEE' },
    { id: 'gk', name: 'General Knowledge', emoji: '\uD83C\uDF0F' },
    { id: 'english', name: 'English', emoji: '\uD83D\uDCDA' }
  ];
  var LEVELS = [
    { id: 'easy', name: 'Easy', sub: 'Warm-up' },
    { id: 'medium', name: 'Medium', sub: 'Build-up' },
    { id: 'hard', name: 'Hard', sub: 'Challenge' }
  ];

  var state = { topic: null, level: null, list: [], idx: 0, attempted: 0, correct: 0, selected: null, revealed: false };
  var app = document.getElementById('app');

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function clear() { app.innerHTML = ''; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function getQuestions(topic, level) {
    if (topic === 'aptitude') return generateAptitude(level);
    if (topic === 'gk') return shuffle(window.QUESTIONS_GK[level]);
    if (topic === 'english') return shuffle(window.QUESTIONS_EN[level]);
    return [];
  }

  // ---------- HOME ----------
  function renderHome() {
    clear();
    var wrap = el('section', 'view view--home');
    wrap.appendChild(el('h1', 'big-title', 'Pick a subject \uD83D\uDC3C'));
    wrap.appendChild(el('p', 'subtitle', 'Tap a panda to start practising.'));
    var row = el('div', 'panda-row');
    TOPICS.forEach(function (t) {
      row.appendChild(Panda.makePandaButton(t.name, function () { selectTopic(t.id); }, { sub: t.emoji }));
    });
    wrap.appendChild(row);
    app.appendChild(wrap);
  }

  // ---------- LEVELS ----------
  function selectTopic(topicId) {
    state.topic = topicId;
    clear();
    var t = TOPICS.filter(function (x) { return x.id === topicId; })[0];
    var wrap = el('section', 'view');
    var back = el('button', 'link-btn', '\u2190 Back to subjects');
    back.addEventListener('click', renderHome);
    wrap.appendChild(back);
    wrap.appendChild(el('h1', 'big-title', t.name));
    wrap.appendChild(el('p', 'subtitle', 'Choose your level. Each one is a separate set.'));
    var row = el('div', 'panda-row');
    LEVELS.forEach(function (lv) {
      row.appendChild(Panda.makePandaButton(lv.name, function () { startQuiz(lv.id); }, { sub: lv.sub }));
    });
    wrap.appendChild(row);
    app.appendChild(wrap);
  }

  // ---------- QUIZ ----------
  function startQuiz(level) {
    state.level = level;
    state.list = getQuestions(state.topic, level);
    state.idx = 0; state.attempted = 0; state.correct = 0;
    renderQuestion();
  }

  function scorecard() {
    var pctv = state.attempted ? Math.round((state.correct / state.attempted) * 100) : 0;
    var card = el('div', 'scorecard');
    card.innerHTML =
      '<div class="sc-item"><span class="sc-num">' + (state.idx + 1) + '/' + state.list.length + '</span><span class="sc-lbl">Question</span></div>' +
      '<div class="sc-item"><span class="sc-num">' + state.attempted + '</span><span class="sc-lbl">Attempted</span></div>' +
      '<div class="sc-item sc-good"><span class="sc-num">' + state.correct + '</span><span class="sc-lbl">Correct</span></div>' +
      '<div class="sc-item"><span class="sc-num">' + pctv + '%</span><span class="sc-lbl">Accuracy</span></div>';
    return card;
  }

  function renderQuestion() {
    if (state.idx >= state.list.length) return renderResult();
    var q = state.list[state.idx];
    state.selected = null; state.revealed = false;
    clear();
    var wrap = el('section', 'view');

    var top = el('div', 'quiz-top');
    var back = el('button', 'link-btn', '\u2190 Levels');
    back.addEventListener('click', function () { selectTopic(state.topic); });
    top.appendChild(back);
    wrap.appendChild(top);

    wrap.appendChild(scorecard());

    var card = el('div', 'q-card');
    card.appendChild(el('div', 'q-text', q.q));

    var optsBox = el('div', 'options');
    q.options.forEach(function (opt, i) {
      var b = el('button', 'option', '<span class="opt-key">' + 'ABCD'[i] + '</span>' + opt);
      b.addEventListener('click', function () { selectOption(i, optsBox); });
      optsBox.appendChild(b);
    });
    card.appendChild(optsBox);

    // reveal panda + explanation area
    var revealRow = el('div', 'reveal-row');
    var pandaReveal = Panda.makePandaButton('Show Answer', function () { reveal(q, optsBox, ansBox); },
      { small: true, variant: 'reveal', ariaLabel: 'Show the answer' });
    revealRow.appendChild(pandaReveal);
    var hint = el('p', 'reveal-hint', 'Pick an option, then tap the panda to check.');
    revealRow.appendChild(hint);
    card.appendChild(revealRow);

    var ansBox = el('div', 'answer-box hidden');
    card.appendChild(ansBox);

    var nav = el('div', 'q-nav');
    var nextBtn = el('button', 'next-btn', state.idx === state.list.length - 1 ? 'Finish \uD83C\uDFC1' : 'Next \u2192');
    nextBtn.addEventListener('click', function () { state.idx++; renderQuestion(); });
    nav.appendChild(nextBtn);
    card.appendChild(nav);

    wrap.appendChild(card);
    app.appendChild(wrap);
  }

  function selectOption(i, optsBox) {
    if (state.revealed) return;
    state.selected = i;
    var kids = optsBox.querySelectorAll('.option');
    for (var k = 0; k < kids.length; k++) kids[k].classList.remove('selected');
    kids[i].classList.add('selected');
  }

  function reveal(q, optsBox, ansBox) {
    if (state.revealed) return;
    state.revealed = true;
    var kids = optsBox.querySelectorAll('.option');
    for (var k = 0; k < kids.length; k++) {
      kids[k].disabled = true;
      if (k === q.answer) kids[k].classList.add('correct');
      if (state.selected === k && k !== q.answer) kids[k].classList.add('wrong');
    }
    if (state.selected !== null) {
      state.attempted++;
      if (state.selected === q.answer) state.correct++;
    }
    var verdict = state.selected === null ? '' :
      (state.selected === q.answer ? '<span class="v-good">\u2714 Correct!</span>' : '<span class="v-bad">\u2716 Not quite.</span>');
    ansBox.innerHTML = verdict +
      '<div class="ans-line"><strong>Answer:</strong> ' + q.options[q.answer] + '</div>' +
      '<div class="ans-exp">' + (q.explanation || '') + '</div>';
    ansBox.classList.remove('hidden');
    // refresh scorecard
    var sc = app.querySelector('.scorecard');
    if (sc) sc.replaceWith(scorecard());
  }

  function renderResult() {
    clear();
    var pctv = state.attempted ? Math.round((state.correct / state.attempted) * 100) : 0;
    var msg = pctv >= 80 ? 'Brilliant! \uD83C\uDF8B' : pctv >= 50 ? 'Good going! Keep practising.' : 'Nice try \u2014 practice makes panda!';
    var wrap = el('section', 'view view--result');
    var card = el('div', 'result-card');
    card.innerHTML =
      Panda.pandaSVG() +
      '<h1 class="big-title">Set complete!</h1>' +
      '<p class="result-score">' + state.correct + ' / ' + state.attempted + ' correct</p>' +
      '<p class="result-pct">' + pctv + '% accuracy</p>' +
      '<p class="subtitle">' + msg + '</p>';
    var row = el('div', 'result-actions');
    var again = el('button', 'next-btn', 'Try again');
    again.addEventListener('click', function () { startQuiz(state.level); });
    var lvls = el('button', 'ghost-btn', 'Other levels');
    lvls.addEventListener('click', function () { selectTopic(state.topic); });
    var home = el('button', 'ghost-btn', 'Home');
    home.addEventListener('click', renderHome);
    row.appendChild(again); row.appendChild(lvls); row.appendChild(home);
    card.appendChild(row);
    wrap.appendChild(card);
    app.appendChild(wrap);
  }

  renderHome();
})();
