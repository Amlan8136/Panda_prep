/* questions-aptitude.js
   Generates aptitude questions by COMPUTING the answers, so they are always correct.
   Change QUESTIONS_PER_LEVEL below to make more or fewer (e.g. 2000). */

(function (global) {
  var QUESTIONS_PER_LEVEL = 200; // <-- raise this to 2000 for a huge bank

  function ri(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function numDist(correct) {
    var cand = [correct + ri(1, 5), correct - ri(1, 5), correct + ri(6, 12),
      Math.round(correct * 1.1), Math.round(correct * 0.9), correct + 10, correct - 10];
    var out = [], seen = {};
    for (var i = 0; i < cand.length; i++) {
      var c = cand[i];
      if (c > 0 && c !== correct && !seen[c]) { seen[c] = 1; out.push(c); }
    }
    return shuffle(out);
  }

  function mcq(q, correct, distractors, explanation) {
    var opts = [correct];
    for (var i = 0; i < distractors.length && opts.length < 4; i++) {
      if (opts.indexOf(distractors[i]) === -1) opts.push(distractors[i]);
    }
    var pad = 1;
    while (opts.length < 4) {
      var c = correct + pad * ri(1, 3);
      if (opts.indexOf(c) === -1) opts.push(c);
      pad++;
    }
    var s = shuffle(opts);
    return { q: q, options: s.map(String), answer: s.indexOf(correct), explanation: explanation };
  }

  var EASY = [
    function () { var p = pick([5, 10, 20, 25, 50]); var n = ri(2, 20) * 10; var a = p * n / 100;
      return mcq('What is ' + p + '% of ' + n + '?', a, numDist(a), p + '% of ' + n + ' = (' + p + '/100)\u00d7' + n + ' = ' + a + '.'); },
    function () { var x = ri(2, 9), n = ri(3, 9); var a = x * n;
      return mcq('If one notebook costs \u20b9' + x + ', what do ' + n + ' notebooks cost?', a, numDist(a), x + ' \u00d7 ' + n + ' = \u20b9' + a + '.'); },
    function () { var b = ri(10, 40); var nums = shuffle([b - 2, b, b + 2]); var a = b;
      return mcq('Find the average of ' + nums.join(', ') + '.', a, numDist(a), 'Sum = ' + (nums[0] + nums[1] + nums[2]) + ', average = sum \u00f7 3 = ' + a + '.'); },
    function () { var a1 = ri(12, 60), b1 = ri(12, 60); var a = a1 + b1;
      return mcq('A basket has ' + a1 + ' apples and ' + b1 + ' oranges. How many fruits in total?', a, numDist(a), a1 + ' + ' + b1 + ' = ' + a + '.'); },
    function () { var sp = ri(3, 12), t = ri(2, 6); var a = sp * t;
      return mcq('A car moves at ' + sp + ' km/h for ' + t + ' hours. Distance covered?', a, numDist(a), 'Distance = speed \u00d7 time = ' + sp + ' \u00d7 ' + t + ' = ' + a + ' km.'); },
    function () { var n = ri(3, 10) * 10; var a = n / 2;
      return mcq('What is half of ' + n + '?', a, numDist(a), 'Half of ' + n + ' = ' + n + ' \u00f7 2 = ' + a + '.'); }
  ];

  var MEDIUM = [
    function () { var ms = pick([5, 10, 15, 20, 25]); var t = ri(6, 20); var L = ms * t; var a = ms * 18 / 5;
      return mcq('A train ' + L + ' m long passes a pole in ' + t + ' seconds. Its speed is? (km/h)', a, numDist(a),
        'Speed = ' + L + ' m \u00f7 ' + t + ' s = ' + ms + ' m/s = ' + ms + '\u00d718/5 = ' + a + ' km/h.'); },
    function () { var n = pick([4, 5, 6]); var A = ri(22, 40); var B = ri(15, A - 2); var removed = n * A - (n - 1) * B;
      if (removed <= 0) return null;
      return mcq('The average of ' + n + ' numbers is ' + A + '. When one number is removed, the average of the rest is ' + B + '. Find the removed number.',
        removed, numDist(removed), 'Removed = ' + n + '\u00d7' + A + ' \u2212 ' + (n - 1) + '\u00d7' + B + ' = ' + (n * A) + ' \u2212 ' + ((n - 1) * B) + ' = ' + removed + '.'); },
    function () { var P = pick([1000, 1500, 2000, 2500, 3000]); var R = pick([4, 5, 8, 10, 12]); var T = ri(2, 5); var a = P * R * T / 100;
      return mcq('Find the simple interest on \u20b9' + P + ' at ' + R + '% per annum for ' + T + ' years.', a, numDist(a),
        'SI = P\u00d7R\u00d7T/100 = ' + P + '\u00d7' + R + '\u00d7' + T + '/100 = \u20b9' + a + '.'); },
    function () { var CP = pick([100, 200, 250, 400, 500]); var pr = pick([10, 20, 25, 50]); var SP = CP + CP * pr / 100; var a = pr;
      return mcq('An item bought for \u20b9' + CP + ' is sold for \u20b9' + SP + '. Find the profit percent.', a, numDist(a),
        'Profit = \u20b9' + (SP - CP) + ', Profit% = (' + (SP - CP) + '/' + CP + ')\u00d7100 = ' + a + '%.'); },
    function () { var p = pick([12, 15, 30, 35, 45]); var n = pick([200, 300, 400, 500, 600, 800]); var a = p * n / 100;
      return mcq('What is ' + p + '% of ' + n + '?', a, numDist(a), p + '% of ' + n + ' = ' + p + '\u00d7' + n + '/100 = ' + a + '.'); },
    function () { var total = pick([600, 900, 1200, 1500]); var r1 = ri(1, 4), r2 = ri(1, 4);
      if (total % (r1 + r2) !== 0) return null; var a = total * r1 / (r1 + r2);
      return mcq('\u20b9' + total + ' is divided between A and B in the ratio ' + r1 + ':' + r2 + '. Find A\u2019s share.', a, numDist(a),
        'A\u2019s share = ' + r1 + '/' + (r1 + r2) + ' \u00d7 ' + total + ' = \u20b9' + a + '.'); }
  ];

  var HARD = [
    function () { var P = pick([1000, 2000, 4000, 5000, 8000]); var R = pick([10, 20]); var A = P * (1 + R / 100) * (1 + R / 100); var ci = A - P;
      return mcq('Find the compound interest on \u20b9' + P + ' at ' + R + '% per annum for 2 years.', ci, numDist(ci),
        'Amount = ' + P + '(1+' + R + '/100)\u00b2 = \u20b9' + A + '; CI = ' + A + ' \u2212 ' + P + ' = \u20b9' + ci + '.'); },
    function () { var u = pick([12, 15, 18, 20]); var v = pick([10, 12, 15]); var t = ri(8, 16); var total = (u + v) * t;
      var L1 = Math.round(total * 0.5 / 10) * 10; var L2 = total - L1; if (L2 <= 0) return null; var a = t;
      return mcq('Two trains of lengths ' + L1 + ' m and ' + L2 + ' m run in opposite directions at ' + u + ' m/s and ' + v + ' m/s. In how many seconds will they cross each other?',
        a, numDist(a), 'Time = (' + L1 + '+' + L2 + ') \u00f7 (' + u + '+' + v + ') = ' + total + '/' + (u + v) + ' = ' + a + ' s.'); },
    function () { var a1 = pick([2, 3, 4, 5]); var b1 = pick([2, 3, 4, 5]); var profit = (a1 + b1) * pick([100, 200, 300]); var a = profit * a1 / (a1 + b1);
      return mcq('A and B invest in the ratio ' + a1 + ':' + b1 + '. If the total profit is \u20b9' + profit + ', find A\u2019s share.', a, numDist(a),
        'A\u2019s share = ' + a1 + '/' + (a1 + b1) + ' \u00d7 ' + profit + ' = \u20b9' + a + '.'); },
    function () { var SP = pick([720, 800, 900, 960]); var d = pick([10, 20, 25]); if ((SP * 100) % (100 - d) !== 0) return null; var a = SP * 100 / (100 - d);
      return mcq('After a discount of ' + d + '%, an article is sold for \u20b9' + SP + '. Find its marked price.', a, numDist(a),
        'MP = ' + SP + ' \u00d7 100/(100\u2212' + d + ') = \u20b9' + a + '.'); },
    function () { var x = pick([10, 12, 15, 20]); var y = pick([10, 12, 15, 20]); if (x === y) return null; if ((x * y) % (x + y) !== 0) return null; var a = (x * y) / (x + y);
      return mcq('A can finish a work in ' + x + ' days and B in ' + y + ' days. Working together, how many days will they take?', a, numDist(a),
        'Together = (' + x + '\u00d7' + y + ')/(' + x + '+' + y + ') = ' + a + ' days.'); },
    function () { var P = pick([1000, 2000, 4000, 6000, 8000]); var R = pick([5, 10, 15]); var T = ri(2, 4); var si = P * R * T / 100; var a = si;
      return mcq('What is the simple interest on \u20b9' + P + ' at ' + R + '% for ' + T + ' years?', a, numDist(a),
        'SI = ' + P + '\u00d7' + R + '\u00d7' + T + '/100 = \u20b9' + a + '.'); }
  ];

  function gen(level, count) {
    count = count || QUESTIONS_PER_LEVEL;
    var tpls = level === 'easy' ? EASY : level === 'medium' ? MEDIUM : HARD;
    var out = [], seen = {}, guard = 0;
    while (out.length < count && guard < count * 50) {
      guard++;
      var q = pick(tpls)();
      if (!q) continue;
      if (seen[q.q]) continue;
      seen[q.q] = 1; out.push(q);
    }
    return out;
  }

  global.generateAptitude = gen;
  global.APT_PER_LEVEL = QUESTIONS_PER_LEVEL;
  if (typeof module !== 'undefined' && module.exports) module.exports = { generateAptitude: gen };
})(typeof window !== 'undefined' ? window : global);
