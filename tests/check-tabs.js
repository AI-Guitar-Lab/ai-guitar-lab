// Checks every tab in the app for moves no hand can make: long hammer-ons and pull-offs
// without a tap, hammer-ons that go down or pull-offs that go up, pull-offs with nothing
// to pull from, chord stretches wider than 5 frets, bends on open strings and frets past 24.
// Run: npm install playwright && npx playwright install chromium && node tests/check-tabs.js
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await page.goto('file://' + path.resolve(__dirname, '..', 'index.html'));
  await page.waitForFunction(() => window.V3 && V3.tabLintAll);
  const problems = await page.evaluate(() => V3.tabLintAll());
  await browser.close();
  if (errors.length) { console.error('Page errors:\n' + errors.join('\n')); process.exit(1); }
  if (problems.length) { console.error(problems.length + ' unplayable tab moves:\n' + problems.join('\n')); process.exit(1); }
  console.log('All tabs are playable.');
})();
