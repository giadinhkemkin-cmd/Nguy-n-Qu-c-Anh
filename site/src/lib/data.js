import tours from '../../../data/tours.json';
import congTy from '../../../data/cong-ty.json';
import lich from '../../../data/lich.json';
import map from '../data/map.json';
import { geoMercator } from 'd3-geo';

export { tours, congTy, lich, map };

export const proj = geoMercator().scale(map.scale).translate(map.translate);
export const xy = ([lat, lon]) => proj([lon, lat]).map((v) => Math.round(v * 10) / 10);

// Giá: thiếu hoặc 0 thì hiện 'Hỏi giá' (không bịa giá)
export const vnd = (n) => (typeof n === 'number' && n > 0 ? n.toLocaleString('vi-VN').replace(/,/g, '.') + ' đ' : 'Hỏi giá');
export const coGia = (n) => typeof n === 'number' && n > 0;
export const vndShort = (n) => {
  if (n >= 1e6) return (n / 1e6).toLocaleString('vi-VN', { maximumFractionDigits: 2 }) + ' triệu';
  return Math.round(n / 1000) + ' nghìn';
};

// Khoảng cách đường chim bay (km) từ văn phòng tới điểm chính của tour
const R = 6371;
export function km([a1, o1], [a2, o2]) {
  const r = Math.PI / 180;
  const d = Math.sin(((a2 - a1) * r) / 2) ** 2 + Math.cos(a1 * r) * Math.cos(a2 * r) * Math.sin(((o2 - o1) * r) / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(d));
}

// Điểm chính (mốc giờ "tới nơi") của từng tour
const DIEM_CHINH = {
  'ba-na-cau-vang': 2,
  'hoi-an-chieu-toi': 2,
  'cu-lao-cham': 3,
  'my-son-sang-som': 1,
  'hai-van-hue-2n1d': 1,
};
// Khoảng cách đường bộ ước tính theo bản đồ (km) – [CẦN XÁC NHẬN] khi có số liệu của nhà xe
const KM_DUONG = { 'ba-na-cau-vang': 35, 'hoi-an-chieu-toi': 30, 'cu-lao-cham': 35, 'my-son-sang-som': 45, 'hai-van-hue-2n1d': 100 };

export function diemChinh(t) {
  const i = DIEM_CHINH[t.slug] ?? 1;
  const s = t.lich_trinh[Math.min(i, t.lich_trinh.length - 1)];
  return { ...s, gio: s.gio.replace(/^N\d\s/, ''), km: KM_DUONG[t.slug] ?? Math.round(km(congTy.toa_do, s.toa_do)) };
}

export const THU = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
export const THU_NGAN = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
export function ngayVN(iso, ngan = false) {
  const d = new Date(iso + 'T00:00:00');
  const t = (ngan ? THU_NGAN : THU)[d.getDay()];
  return `${t}, ${d.getDate()}/${d.getMonth() + 1}`;
}

export const HOM_NAY = lich.cap_nhat; // ngày dữ liệu được cập nhật

export function chuyenSapToi(slug, n = 6) {
  return lich.chuyen.filter((c) => c.tour === slug && c.ngay >= HOM_NAY).slice(0, n);
}
export function chuyenConCho(slug) {
  return lich.chuyen.find((c) => c.tour === slug && c.ngay >= HOM_NAY && c.con_cho > 0);
}
export function dangMua(t, iso = HOM_NAY) {
  if (t.lich.kieu !== 'mua') return true;
  const m = new Date(iso + 'T00:00:00').getMonth() + 1;
  return t.lich.thang_mo.includes(m);
}

export function zaloLink(tinNhan) {
  // Zalo không nhận nội dung soạn sẵn qua link công khai; giữ link zalo.me và chép tin vào clipboard bằng JS.
  return congTy.zalo;
}

export const LOAI = (t) => (t.thoi_luong.includes('2 ngày') ? 'qua-dem' : t.thoi_luong.includes('Nửa') ? 'nua-ngay' : 'trong-ngay');

export const PICTO = { nui: 'cap-treo', den: 'den-long', bien: 'lan', thap: 'thap', 'co-do': 'co-do' };
export const MAU_TUYEN = { nui: 'var(--t-nui)', den: 'var(--t-den)', bien: 'var(--t-bien)', thap: 'var(--t-thap)', 'co-do': 'var(--t-co-do)' };
export function huong([a1, o1], [a2, o2]) {
  const r = Math.PI / 180;
  const y = Math.sin((o2 - o1) * r) * Math.cos(a2 * r);
  const x = Math.cos(a1 * r) * Math.sin(a2 * r) - Math.sin(a1 * r) * Math.cos(a2 * r) * Math.cos((o2 - o1) * r);
  return Math.round(((Math.atan2(y, x) / r + 360) % 360) / 15) * 15; // làm tròn 15° như mũi tên biển báo
}
// Tóm tắt dùng cho biển chỉ dẫn: điểm chính, km, giờ, hướng
export const tuyen = tours.map((t) => {
  const d = diemChinh(t);
  return { slug: t.slug, ten: t.ten_ngan, diem: d.ten, gio: d.gio, km: d.km, huong: huong(congTy.toa_do, d.toa_do), picto: PICTO[t.mau], mau: MAU_TUYEN[t.mau], t };
}).sort((a, b) => a.gio.localeCompare(b.gio));

// Bỏ nhãn nội bộ [CẦN XÁC NHẬN …] khỏi chữ hiển thị (nhãn vẫn nằm trong data và NOTES.md)
export const clean = (s = '') => s.replace(/\s*\[CẦN XÁC NHẬN[^\]]*\]/g, '').trim();
const MA = { 'ba-na-cau-vang': 'BN', 'hoi-an-chieu-toi': 'HA', 'cu-lao-cham': 'CLC', 'my-son-sang-som': 'MS', 'hai-van-hue-2n1d': 'HV' };
export const maChuyen = (slug, iso) => `GN-${iso.slice(8, 10)}${iso.slice(5, 7)}-${MA[slug] ?? 'X'}`;
// Khung nhìn bản đồ ôm sát một tuyến, thêm lề, giữ tỉ lệ w/h
export function khungTuyen(t, ratio = 1.4, pad = 40) {
  const pts = t.lich_trinh.map((s) => xy(s.toa_do));
  let x0 = Math.min(...pts.map((p) => p[0])) - pad, x1 = Math.max(...pts.map((p) => p[0])) + pad;
  let y0 = Math.min(...pts.map((p) => p[1])) - pad, y1 = Math.max(...pts.map((p) => p[1])) + pad;
  // tour chỉ có 1 điểm hoặc các điểm sát nhau: giữ khung tối thiểu để bản đồ không phóng quá to
  const MIN = 220;
  if (x1 - x0 < MIN) { const c = (x0 + x1) / 2; x0 = c - MIN / 2; x1 = c + MIN / 2; }
  if (y1 - y0 < MIN / ratio) { const c = (y0 + y1) / 2; y0 = c - MIN / ratio / 2; y1 = c + MIN / ratio / 2; }
  let w = x1 - x0, h = y1 - y0;
  if (w / h < ratio) { const nw = h * ratio; x0 -= (nw - w) / 2; w = nw; } else { const nh = w / ratio; y0 -= (nh - h) / 2; h = nh; }
  return [x0, y0, w, h].map((v) => Math.round(v)).join(' ');
}
