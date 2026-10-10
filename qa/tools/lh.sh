#!/bin/bash
# Đo Lighthouse mobile: qa/tools/lh.sh <base> <outdir> page1 page2 ...
base=$1; out=$2; shift 2; mkdir -p $out
export CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome
for p in "$@"; do
  n=$(echo "$p" | sed 's#/#_#g; s#\.html##')
  npx --prefix /home/user/Nguy-n-Qu-c-Anh/site lighthouse "$base/$p" --quiet --chrome-flags="--headless=new --no-sandbox" --form-factor=mobile --output=json --output-path="$out/$n.json" >/dev/null 2>&1
  node -e "const r=require('$out/$n.json');const c=r.categories;const a=r.audits;console.log('$p'.padEnd(32),'Perf',Math.round(c.performance.score*100),'A11y',Math.round(c.accessibility.score*100),'BP',Math.round(c['best-practices'].score*100),'SEO',Math.round(c.seo.score*100),'| LCP',a['largest-contentful-paint'].displayValue,'TBT',a['total-blocking-time'].displayValue,'CLS',a['cumulative-layout-shift'].displayValue,'| bytes',Math.round(a['total-byte-weight'].numericValue/1024)+'KB')"
done
