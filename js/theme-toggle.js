(() => {
  const root = document.documentElement;
  const key = 'web-design-theme';
  const saved = localStorage.getItem(key) || 'dark';
  root.setAttribute('data-theme', saved);

  const btn = document.getElementById('themeToggle');
  const syncLabel = () => {
    const t = root.getAttribute('data-theme') || 'dark';
    btn.textContent = t === 'dark' ? '☀️ Light' : '🌙 Dark';
  };
  if (!btn) return;
  syncLabel();

  btn.addEventListener('click', () => {
    const next = (root.getAttribute('data-theme') || 'dark') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(key, next);
    syncLabel();
  });
})();
