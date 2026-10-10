// Chụp trang: node qa/tools/shoot.cjs <baseUrl> <outDir> <path1,path2,...> [mode]
// mode: "first" (màn đầu), "full" (cả trang), "scroll" (5 vị trí 0/25/50/75/100%)
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path'); const fs = require('fs');
(async () => {
  const [, , base, out, list, mode = 'first'] = process.argv;
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const sizes = [{ n: 'mobile', w: 390, h: 844, s: 2, m: true }, { n: 'desktop', w: 1440, h: 900, s: 1, m: false }];
  for (const p of list.split(',')) {
    for (const sz of sizes) {
      const ctx = await b.newContext({ viewport: { width: sz.w, height: sz.h }, deviceScaleFactor: sz.s, isMobile: sz.m, hasTouch: sz.m });
      const pg = await ctx.newPage();
      const errs = [];
      pg.on('pageerror', (e) => errs.push(e.message));
      pg.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
      await pg.goto(base + p, { waitUntil: 'networkidle' });
      await pg.waitForTimeout(1200);
      const name = (p.replace(/^\//, '').replace(/\.html$/, '').replace(/\//g, '_') || 'index');
      if (mode === 'first') await pg.screenshot({ path: path.join(out, `${name}-${sz.n}.png`) });
      else if (mode === 'full') {
        // cuộn hết để kích hoạt hiệu ứng theo cuộn rồi chụp cả trang
        const H = await pg.evaluate(() => document.documentElement.scrollHeight);
        for (let y = 0; y < H; y += 400) { await pg.evaluate((yy) => window.scrollTo(0, yy), y); await pg.waitForTimeout(60); }
        await pg.evaluate(() => window.scrollTo(0, 0)); await pg.waitForTimeout(500);
        await pg.screenshot({ path: path.join(out, `${name}-${sz.n}-full.png`), fullPage: true });
      } else {
        const H = await pg.evaluate(() => document.documentElement.scrollHeight - innerHeight);
        for (const f of [0, 25, 50, 75, 100]) {
          const target = Math.round(H * f / 100);
          for (let y = 0; y <= target; y += 300) { await pg.evaluate((yy) => window.scrollTo(0, yy), y); await pg.waitForTimeout(40); }
          await pg.evaluate((yy) => window.scrollTo(0, yy), target);
          await pg.waitForTimeout(700);
          await pg.screenshot({ path: path.join(out, `${name}-${sz.n}-${f}.png`) });
        }
      }
      if (errs.length) console.log(p, sz.n, 'ERR:', errs.join(' | '));
      await ctx.close();
    }
  }
  await b.close();
})();
