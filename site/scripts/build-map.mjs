// Dựng đường bờ biển Đà Nẵng – Quảng Nam – Huế từ Natural Earth 10m (public domain, gói world-atlas ISC)
// Xuất src/data/map.json: path đất liền + hàm chiếu toạ độ (dùng tham số scale/translate)
import fs from 'fs';
import {feature} from 'topojson-client';
import {geoMercator, geoPath, geoArea, geoBounds} from 'd3-geo';
const t=JSON.parse(fs.readFileSync(new URL('../node_modules/world-atlas/land-10m.json', import.meta.url)));
const fc=feature(t,t.objects.land);
// Lấy các đa giác đất nằm trong vùng (bỏ đa giác bị đảo chiều phủ cả địa cầu)
const polys=[];
for(const f of fc.features){
  const g=f.geometry; const list=g.type==='Polygon'?[g.coordinates]:g.coordinates;
  for(const c of list){
    const poly={type:'Polygon',coordinates:c};
    if(geoArea(poly)>2*Math.PI) continue;
    const [[x0,y0],[x1,y1]]=geoBounds(poly);
    const lonOk = x0<=x1 ? !(x1<107.0||x0>109.0) : true; // vắt qua kinh tuyến 180
    if(!lonOk||y1<15.3||y0>17.0) continue;
    polys.push(c);
  }
}
const land={type:'MultiPolygon',coordinates:polys};
console.log('polygons',polys.length);
const W=1000,H=1000;
const bbox={type:'MultiPoint',coordinates:[[107.42,15.68],[108.62,16.62]]};
const proj=geoMercator().fitExtent([[0,0],[W,H]],bbox);
proj.clipExtent([[-20,-20],[W+20,H+20]]);
const path=geoPath(proj).digits(1);
const d=path(land);
// Cù Lao Chàm (Hòn Lao) không có trong dữ liệu 10m: vẽ tay theo toạ độ gần đúng
const island={type:'Polygon',coordinates:[[[108.488,15.958],[108.500,15.972],[108.520,15.977],[108.538,15.968],[108.540,15.952],[108.525,15.940],[108.505,15.940],[108.492,15.947],[108.488,15.958]]]};
const out={W,H,scale:proj.scale(),translate:proj.translate(),land:d,island:path(island)};
fs.mkdirSync(new URL('../src/data/', import.meta.url),{recursive:true});
fs.writeFileSync(new URL('../src/data/map.json', import.meta.url),JSON.stringify(out));
console.log('land path length',d.length);
