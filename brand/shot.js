const { chromium } = require('/Users/mickydroch/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 2200, height: 1080 } });
  await p.goto('file://' + __dirname + '/avatar.html'); await p.waitForTimeout(2500);
  for (const id of ['v1', 'v2']) await p.locator('#' + id).screenshot({ path: `avatar_${id}.png` });
  await b.close(); })();
