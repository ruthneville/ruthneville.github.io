
(function() {
  const key = 'theme';
  const root = document.documentElement;
  const btn = document.querySelector('[data-toggle-theme]');
  const set = (mode) => {
    if (!mode) return;
    root.dataset.theme = mode;
    localStorage.setItem(key, mode);
  };
  const saved = localStorage.getItem(key);
  if (saved) set(saved);
  if (btn) {
    btn.addEventListener('click', () => {
      const next = (root.dataset.theme === 'light') ? 'dark' : 'light';
      set(next);
    });
  }
})();
