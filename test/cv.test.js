const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

const cvPath = fs.existsSync(path.join(__dirname, '..', 'data', 'cv.json'))
  ? path.join(__dirname, '..', 'data', 'cv.json')
  : path.join(__dirname, '..', 'CV.json');

const cv = JSON.parse(fs.readFileSync(cvPath, 'utf8'));

test('CV has required top-level fields', () => {
  assert.ok(cv.name && cv.name.trim(), 'name is required');
  assert.ok(Array.isArray(cv.links) && cv.links.length > 0, 'links must be non-empty array');
  assert.ok(Array.isArray(cv.skills) && cv.skills.length > 0, 'skills must be non-empty array');
});

test('each link has label and href', () => {
  for (const link of cv.links) {
    assert.ok(link.label && link.label.trim(), 'link label required');
    assert.ok(link.href && link.href.trim(), 'link href required');
  }
});
