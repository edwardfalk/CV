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

test('summary is a non-empty string', () => {
  assert.strictEqual(typeof cv.summary, 'string', 'summary must be a string');
  assert.ok(cv.summary.trim().length > 0, 'summary cannot be empty');
});

test('experience entries have required fields', () => {
  assert.ok(Array.isArray(cv.experience) && cv.experience.length > 0, 'experience must be non-empty array');
  for (const exp of cv.experience) {
    assert.ok(exp.org && exp.org.trim(), 'experience org required');
    assert.ok(exp.role && exp.role.trim(), 'experience role required');
    assert.ok(exp.when && exp.when.trim(), 'experience when required');
    if (exp.points !== undefined) {
      assert.ok(Array.isArray(exp.points), 'experience points must be an array if provided');
    }
  }
});

test('projects have title and desc', () => {
  if (cv.projects !== undefined) {
    assert.ok(Array.isArray(cv.projects), 'projects must be an array');
    for (const p of cv.projects) {
      assert.ok(p.title && p.title.trim(), 'project title required');
      assert.ok(p.desc && p.desc.trim(), 'project desc required');
    }
  }
});

test('education entries are populated', () => {
  assert.ok(Array.isArray(cv.education) && cv.education.length > 0, 'education must be non-empty array');
  for (const ed of cv.education) {
    assert.ok(ed.school && ed.school.trim(), 'education school required');
    assert.ok(ed.when && ed.when.trim(), 'education when required');
  }
});
