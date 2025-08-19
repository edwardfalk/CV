function applyTheme(mode, doc = document) {
  const root = doc.documentElement;
  if (mode === 'auto') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', mode);
  }
}

function initTheme(win = window) {
  const stored = win.localStorage.getItem('theme') || 'auto';
  applyTheme(stored, win.document);
  const sel = win.document.getElementById('themeToggle');
  if (sel) {
    sel.value = stored;
    sel.addEventListener('change', () => {
      const val = sel.value;
      win.localStorage.setItem('theme', val);
      applyTheme(val, win.document);
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = { applyTheme, initTheme };
}

if (typeof window !== 'undefined') {
  initTheme();
}
