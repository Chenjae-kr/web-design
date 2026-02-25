(() => {
  const root = document.documentElement;

  const bindVar = (id, name, map = v => v) => {
    const el = document.getElementById(id);
    if (!el) return;
    const update = () => root.style.setProperty(name, map(el.value));
    el.addEventListener('input', update);
    update();
  };

  bindVar('glassBlur', '--glass-blur', v => `${v}px`);
  bindVar('clayDepth', '--clay-depth', v => `${v}px`);
  bindVar('darkContrast', '--dark-contrast', v => `${v}%`);

  const snippets = {
    glass: `.style-glass {\n  backdrop-filter: blur(var(--glass-blur));\n  box-shadow: inset 0 1px 0 rgba(255,255,255,.28), 0 14px 26px rgba(0,0,0,.16);\n}`,
    clay: `.style-clay {\n  border-radius: 20px;\n  box-shadow: 10px 10px 24px rgba(0,0,0,.16), -8px -8px 20px rgba(255,255,255,.22);\n}`,
    dark: `.style-dark {\n  filter: contrast(var(--dark-contrast));\n  border: 1px solid rgba(148,163,184,.26);\n}`
  };

  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const key = btn.dataset.copy;
      const text = snippets[key] || '';
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        const old = btn.textContent;
        btn.textContent = '복사됨';
        setTimeout(() => btn.textContent = old, 900);
      } catch {
        alert('클립보드 복사에 실패했습니다.');
      }
    });
  });
})();
