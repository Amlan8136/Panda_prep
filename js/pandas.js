/* pandas.js — makes cute sitting-panda buttons.
   A panda holds a paper; the button text sits on its belly/paper. */
(function (global) {
  function pandaSVG() {
    return '' +
'<svg class="panda-svg" viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<ellipse cx="72" cy="220" rx="28" ry="19" fill="#2b2b2b"/>' +
  '<ellipse cx="148" cy="220" rx="28" ry="19" fill="#2b2b2b"/>' +
  '<ellipse cx="72" cy="222" rx="12" ry="8" fill="#7bb069"/>' +
  '<ellipse cx="148" cy="222" rx="12" ry="8" fill="#7bb069"/>' +
  '<circle cx="62" cy="56" r="27" fill="#2b2b2b"/>' +
  '<circle cx="158" cy="56" r="27" fill="#2b2b2b"/>' +
  '<circle cx="62" cy="56" r="12" fill="#514b4b"/>' +
  '<circle cx="158" cy="56" r="12" fill="#514b4b"/>' +
  '<rect x="38" y="120" width="144" height="104" rx="52" fill="#ffffff" stroke="#e6dcc6" stroke-width="3"/>' +
  '<path d="M58 150 Q40 188 80 200 L98 178 Q72 170 72 150 Z" fill="#2b2b2b"/>' +
  '<path d="M162 150 Q180 188 140 200 L122 178 Q148 170 148 150 Z" fill="#2b2b2b"/>' +
  '<ellipse cx="110" cy="86" rx="70" ry="62" fill="#ffffff" stroke="#e6dcc6" stroke-width="3"/>' +
  '<ellipse cx="84" cy="90" rx="20" ry="25" fill="#2b2b2b" transform="rotate(-18 84 90)"/>' +
  '<ellipse cx="136" cy="90" rx="20" ry="25" fill="#2b2b2b" transform="rotate(18 136 90)"/>' +
  '<circle cx="86" cy="92" r="7" fill="#ffffff"/>' +
  '<circle cx="134" cy="92" r="7" fill="#ffffff"/>' +
  '<circle cx="88" cy="94" r="3.6" fill="#2b2b2b"/>' +
  '<circle cx="132" cy="94" r="3.6" fill="#2b2b2b"/>' +
  '<ellipse cx="110" cy="112" rx="9" ry="6" fill="#2b2b2b"/>' +
  '<path d="M110 118 Q110 128 101 130 M110 118 Q110 128 119 130" fill="none" stroke="#2b2b2b" stroke-width="2.4" stroke-linecap="round"/>' +
  '<rect x="70" y="150" width="80" height="62" rx="9" fill="#fffdf4" stroke="#d8cdb0" stroke-width="2"/>' +
  '<line x1="80" y1="164" x2="140" y2="164" stroke="#ece2c8" stroke-width="2"/>' +
  '<line x1="80" y1="174" x2="140" y2="174" stroke="#ece2c8" stroke-width="2"/>' +
'</svg>';
  }

  function makePandaButton(label, onClick, opts) {
    opts = opts || {};
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'panda-btn' + (opts.small ? ' panda-btn--small' : '') +
      (opts.variant ? ' panda-btn--' + opts.variant : '');
    btn.innerHTML = pandaSVG() + '<span class="panda-label">' + label + '</span>';
    if (opts.sub) {
      btn.querySelector('.panda-label').innerHTML =
        '<span class="pl-main">' + label + '</span><span class="pl-sub">' + opts.sub + '</span>';
    }
    if (onClick) btn.addEventListener('click', onClick);
    btn.setAttribute('aria-label', opts.ariaLabel || label);
    return btn;
  }

  global.Panda = { makePandaButton: makePandaButton, pandaSVG: pandaSVG };
})(window);
