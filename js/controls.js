(() => {
  const root = document.documentElement;

  const presets = {
    mint: ['79,255,176','167,139,250','96,165,250','251,191,36','248,113,113'],
    violet: ['167,139,250','196,181,253','129,140,248','244,114,182','34,211,238'],
    cyber: ['34,211,238','59,130,246','16,185,129','168,85,247','236,72,153'],
    warm: ['251,146,60','244,114,182','250,204,21','239,68,68','217,119,6']
  };

  const cards = {
    spotlight: document.querySelectorAll('#spotlight .fx-card'),
    border: document.querySelectorAll('#border .fx-card'),
    shadow: document.querySelectorAll('#shadow .fx-card')
  };

  function applyPreset(name){
    const colors = presets[name] || presets.mint;
    [...cards.spotlight, ...cards.border, ...cards.shadow].forEach((el, i) => {
      el.style.setProperty('--cat-rgb', colors[i % colors.length]);
    });
  }

  function setVar(id, varName, fn=v=>v){
    const el = document.getElementById(id);
    if(!el) return;
    const update = () => root.style.setProperty(varName, fn(el.value));
    el.addEventListener('input', update);
    update();
  }

  setVar('spotRadius', '--spotlight-radius', v => `${v}px`);
  setVar('spotAlpha', '--spotlight-alpha', v => (Number(v)/100).toFixed(2));
  setVar('glassBlur', '--glass-blur', v => `${v}px`);
  setVar('borderSpeed', '--border-speed', v => `${v/10}s`);
  setVar('shadowDepth', '--shadow-depth', v => `${v}px`);

  document.querySelectorAll('#presetChips .chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#presetChips .chip').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active');
      applyPreset(btn.dataset.preset);
    });
  });
  applyPreset('mint');

  const snippets = {
    spotlight: `.spotlight::before {\n  background: radial-gradient(var(--spotlight-radius) circle at var(--mx,50%) var(--my,50%), rgba(var(--cat-rgb), var(--spotlight-alpha)), transparent 60%);\n}`,
    glass: `.glass-panel {\n  backdrop-filter: blur(var(--glass-blur));\n  box-shadow: inset 0 1px 0 rgba(255,255,255,.28), 0 18px 36px rgba(0,0,0,.16);\n}`,
    border: `.animated-border:hover {\n  animation: borderFlow var(--border-speed) linear infinite;\n}`,
    shadow: `.soft-shadow {\n  box-shadow:\n    0 2px 8px rgba(0,0,0,.16),\n    0 var(--shadow-depth) calc(var(--shadow-depth) * 2.2) rgba(var(--cat-rgb),.14);\n}`
  };

  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const key = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(snippets[key] || '');
        const old = btn.textContent;
        btn.textContent = '복사됨';
        setTimeout(() => btn.textContent = old, 900);
      } catch (_) {
        alert('클립보드 복사에 실패했습니다.');
      }
    });
  });
})();
