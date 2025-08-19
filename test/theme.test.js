const test = require('node:test');
const assert = require('node:assert');
const { JSDOM } = require('jsdom');
const { applyTheme, initTheme } = require('../theme');

test('applyTheme sets and removes data-theme', () => {
  const dom = new JSDOM('<!doctype html><html><body></body></html>');
  const { document } = dom.window;
  applyTheme('dark', document);
  assert.strictEqual(document.documentElement.getAttribute('data-theme'), 'dark');
  applyTheme('auto', document);
  assert.strictEqual(document.documentElement.getAttribute('data-theme'), null);
});

test('initTheme respects stored preference and updates on change', () => {
  const dom = new JSDOM('<!doctype html><html><body><select id="themeToggle"><option value="auto"></option><option value="light"></option><option value="dark"></option></select></body></html>', { url: 'https://example.org' });
  const { window } = dom;
  window.localStorage.setItem('theme', 'dark');
  initTheme(window);
  assert.strictEqual(window.document.documentElement.getAttribute('data-theme'), 'dark');
  const sel = window.document.getElementById('themeToggle');
  assert.strictEqual(sel.value, 'dark');
  sel.value = 'light';
  sel.dispatchEvent(new window.Event('change'));
  assert.strictEqual(window.document.documentElement.getAttribute('data-theme'), 'light');
  assert.strictEqual(window.localStorage.getItem('theme'), 'light');
});
