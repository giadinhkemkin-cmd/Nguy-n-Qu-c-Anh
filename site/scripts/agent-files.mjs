// Sau build: sinh các file cho agent vào dist/
// - <trang>.md: bản Markdown của từng trang (middleware trả khi Accept: text/markdown)
// - api/*.json: API chỉ đọc, file tĩnh sinh từ data/*.json
// - openapi.json: mô tả API (OpenAPI 3.1.0)
// - llms.txt: mục lục cho mô hình ngôn ngữ (định dạng llmstxt.org)
import fs from 'fs';
import path from 'path';

const root = new URL('../../data/', import.meta.url).pathname;
const dist = new URL('../dist/', import.meta.url).pathname;
const read = (f) => JSON.parse(fs.readFileSync(path.join(root, f), 'utf8'));
const tours = read('tours.json');
const congTy = read('cong-ty.json');
const lich = read('lich.json');

const write = (rel, content) => {
  const f = path.join(dist, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
};

// Cùng quy tắc với site/src/lib/data.js
const vnd = (n) => (typeof n === 'number' && n > 0 ? n.toLocaleString('vi-VN').replace(/,/g, '.') + ' đ' : 'Hỏi giá');
const clean = (s = '') => s.replace(/\s*\[CẦN XÁC NHẬN[^\]]*\]/g, '').trim();
const THU = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
const ngayVN = (iso) => { const d = new Date(iso + 'T00:00:00'); return `${THU[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1}`; };
const MA = { 'ba-na-cau-vang': 'BN', 'hoi-an-chieu-toi': 'HA', 'cu-lao-cham': 'CLC', 'my-son-sang-som': 'MS', 'hai-van-hue-2n1d': 'HV' };
const maChuyen = (slug, iso) => `GN-${iso.slice(8, 10)}${iso.slice(5, 7)}-${MA[slug] ?? 'X'}`;
const DIEM_CHINH = { 'ba-na-cau-vang': 2, 'hoi-an-chieu-toi': 2, 'cu-lao-cham': 3, 'my-son-sang-som': 1, 'hai-van-hue-2n1d': 1 };
const diemChinh = (t) => { const s = t.lich_trinh[Math.min(DIEM_CHINH[t.slug] ?? 1, t.lich_trinh.length - 1)]; return { ten: s.ten, gio: s.gio.replace(/^N\d\s/, '') }; };
const HOM_NAY = lich.cap_nhat;
const sapToi = (slug, n = 6) => lich.chuyen.filter((c) => c.tour === slug && c.ngay >= HOM_NAY).slice(0, n);
const dangMua = (t) => t.lich.kieu !== 'mua' || t.lich.thang_mo.includes(new Date(HOM_NAY + 'T00:00:00').getMonth() + 1);
const page = (slug) => `/tour/${slug}/`;
const lienHe = `Nhắn Zalo ${congTy.dien_thoai} (${congTy.zalo}) hoặc gọi ${congTy.dien_thoai}, ${congTy.gio_lam_viec}.`;
const testNote = '> Trang web thử nghiệm: tên công ty, số điện thoại, địa chỉ, giá và lịch là dữ liệu giả.';

// ---------- Markdown từng trang ----------
const tourLine = (t) => { const d = diemChinh(t); return `- [${t.ten_ngan}](${page(t.slug)}): ${t.thoi_luong}, ${t.gio}. Tới ${d.ten} lúc ${d.gio}. Người lớn ${vnd(t.gia_nguoi_lon)}. ${dangMua(t) ? t.lich.mo_ta : 'Nghỉ mùa biển động, mở lại tháng 3'}.`; };

const index = `# Đà Nẵng lúc còn vắng

${congTy.ten}: năm tour ghép quanh Đà Nẵng, Hội An và Huế. Mỗi xe chở tối đa 12 khách, giờ đi được xếp để tới Cầu Vàng, Mỹ Sơn, phố Hội trước hoặc sau lúc xe đoàn lớn đến.

${testNote}

## Năm tour, giá đã gồm vé

Giá cho một người lớn, đã gồm xe đón tận khách sạn, vé tham quan, bữa ăn trong lịch trình và hướng dẫn viên.

${tours.map(tourLine).join('\n')}

## Bốn điều Gió Nồm giữ ở mọi chuyến

${congTy.cam_ket.map((c) => `- **${c.tieu_de}.** ${c.chi_tiet}`).join('\n')}

## Đặt tour qua Zalo, ba bước

1. Nhắn Zalo tên tour, ngày đi, số người lớn và trẻ em.
2. Gió Nồm báo còn chỗ và gửi số tài khoản. Bạn cọc 30%.
3. Tối hôm trước, người dẫn nhắn giờ đón. Phần tiền còn lại trả ngày đi.

## Câu hỏi thường gặp

${congTy.cau_hoi_thuong_gap.map((q) => `### ${q.hoi}\n\n${q.dap}`).join('\n\n')}

## Liên hệ

${lienHe} Văn phòng: ${congTy.dia_chi}.
`;

const catalog = `# Tour Đà Nẵng, Hội An, Huế

Năm tour ghép, mỗi xe tối đa 12 khách. Giá cho một người lớn, đã gồm xe đón, vé tham quan và bữa ăn trong lịch trình.

${testNote}

| Tour | Thời lượng | Giờ | Người lớn | Trẻ em 1–1,4 m | Lịch |
| --- | --- | --- | --- | --- | --- |
${tours.map((t) => `| [${t.ten_ngan}](${page(t.slug)}) | ${t.thoi_luong} | ${t.gio} | ${vnd(t.gia_nguoi_lon)} | ${vnd(t.gia_tre_em)} | ${dangMua(t) ? t.lich.mo_ta : 'Nghỉ đến tháng 3'} |`).join('\n')}

Dữ liệu máy đọc: [/api/tours.json](/api/tours.json), mô tả trong [/openapi.json](/openapi.json).
`;

const detail = (t) => {
  const d = diemChinh(t);
  const ds = dangMua(t) ? sapToi(t.slug) : [];
  return `# ${t.ten}

${t.mo_ta_ngan}

${testNote}

- Tới ${d.ten}: ${d.gio}
- Thời gian: ${t.thoi_luong}, ${t.gio}
- Nhóm: tối đa ${t.nhom_toi_da} khách
- Lịch: ${dangMua(t) ? t.lich.mo_ta : 'Nghỉ từ tháng 10 đến tháng 2 vì biển động, mở lại tháng 3'}

## Giá

- Người lớn: ${vnd(t.gia_nguoi_lon)}
- Trẻ em 1–1,4 m: ${vnd(t.gia_tre_em)}
- Dưới 1 m: miễn phí${t.phu_thu_phong_don ? `\n- Phụ thu phòng đơn: ${vnd(t.phu_thu_phong_don)}` : ''}

${congTy.chinh_sach.dat_coc}

## Chuyến này có gì

${(t.diem_nhan || []).map((x) => `- ${x}`).join('\n') || t.mo_ta_ngan}

## Lịch trình theo giờ

${t.lich_trinh.map((s) => `- **${s.gio}, ${s.ten}.** ${s.mo_ta}`).join('\n')}

## Giá đã gồm

${t.bao_gom.map((x) => `- ${x}`).join('\n') || '- Hỏi Gió Nồm để biết chi tiết.'}

## Chưa gồm

${t.chua_gom.map((x) => `- ${x}`).join('\n') || '- Không có chi phí ngoài giá tour.'}
${t.nen_mang?.length ? `\n## Nên mang theo\n\n${t.nen_mang.map((x) => `- ${x}`).join('\n')}\n` : ''}${clean(t.luu_y) ? `\n## Cần biết trước\n\n${clean(t.luu_y)}\n` : ''}
## Ngày khởi hành sắp tới

${ds.length ? ds.map((c) => `- ${ngayVN(c.ngay)} (mã ${maChuyen(t.slug, c.ngay)}): ${c.con_cho > 0 ? `còn ${c.con_cho}/12 chỗ` : 'hết chỗ'}`).join('\n') : 'Chưa có ngày khởi hành mở bán.'}

## Đặt cọc và huỷ tour

${congTy.chinh_sach.huy_tour.map((x) => `- ${x}`).join('\n')}
- ${congTy.chinh_sach.tre_em}

## Giữ chỗ

${lienHe} Ghi mã chuyến khi nhắn để giữ đúng ngày.
`;
};

const end = new Date(HOM_NAY + 'T00:00:00'); end.setDate(end.getDate() + 27);
const endIso = end.toISOString().slice(0, 10);
const T = Object.fromEntries(tours.map((t) => [t.slug, t]));
const schedule = `# Lịch khởi hành

Ngày có đoàn và số chỗ còn lại trong 4 tuần tới, cập nhật ${ngayVN(lich.cap_nhat)}. Số chỗ thay đổi trong ngày, nhắn Zalo để giữ chỗ chắc chắn.

${testNote}

| Ngày | Tour | Mã chuyến | Còn chỗ |
| --- | --- | --- | --- |
${lich.chuyen.filter((c) => c.ngay >= HOM_NAY && endIso >= c.ngay).map((c) => `| ${ngayVN(c.ngay)} | [${T[c.tour].ten_ngan}](${page(c.tour)}) | ${maChuyen(c.tour, c.ngay)} | ${c.con_cho > 0 ? `${c.con_cho}/12` : 'Hết chỗ'} |`).join('\n')}

Cù Lao Chàm nghỉ từ tháng 10 đến tháng 2 vì biển động. Toàn bộ lịch đến ${ngayVN(lich.chuyen.at(-1).ngay)}: [/api/lich.json](/api/lich.json).
`;

const contact = `# Hỏi chỗ, đặt tour

Cách nhanh nhất là nhắn Zalo. Gió Nồm trả lời từ 7:00 đến 21:00, cả tuần.

${testNote}

- Zalo: ${congTy.zalo}
- Điện thoại: ${congTy.dien_thoai}
- Email: ${congTy.email}
- Văn phòng: ${congTy.dia_chi}
- Giờ làm việc: ${congTy.gio_lam_viec}

## Đặt cọc và huỷ

${congTy.chinh_sach.dat_coc}

${congTy.chinh_sach.huy_tour.map((x) => `- ${x}`).join('\n')}
`;

write('index.md', index);
write('tour.md', catalog);
for (const t of tours) write(`tour/${t.slug}.md`, detail(t));
write('lich-khoi-hanh.md', schedule);
write('lien-he.md', contact);

// ---------- API tĩnh ----------
const summary = (t) => {
  const d = diemChinh(t);
  return { slug: t.slug, ten: t.ten, ten_ngan: t.ten_ngan, vung: t.vung, thoi_luong: t.thoi_luong, gio: t.gio, gia_nguoi_lon: t.gia_nguoi_lon, gia_tre_em: t.gia_tre_em ?? null, nhom_toi_da: t.nhom_toi_da, lich: t.lich.mo_ta, dang_mo_ban: dangMua(t), diem_chinh: d, url: page(t.slug), api: `/api/tours/${t.slug}.json` };
};
const json = (o) => JSON.stringify(o, null, 2) + '\n';
write('api/tours.json', json({ cap_nhat: lich.cap_nhat, du_lieu_test: true, tours: tours.map(summary) }));
for (const t of tours) {
  write(`api/tours/${t.slug}.json`, json({ ...summary(t), mo_ta_ngan: t.mo_ta_ngan, diem_nhan: t.diem_nhan, lich_trinh: t.lich_trinh, bao_gom: t.bao_gom, chua_gom: t.chua_gom, nen_mang: t.nen_mang, luu_y: clean(t.luu_y), phu_thu_phong_don: t.phu_thu_phong_don ?? null, chuyen_sap_toi: sapToi(t.slug, 20).map((c) => ({ ngay: c.ngay, ma_chuyen: maChuyen(t.slug, c.ngay), con_cho: c.con_cho })) }));
}
write('api/lich.json', json({ cap_nhat: lich.cap_nhat, du_lieu_test: true, chuyen: lich.chuyen.map((c) => ({ tour: c.tour, ngay: c.ngay, ma_chuyen: maChuyen(c.tour, c.ngay), con_cho: c.con_cho })) }));
// Bỏ ghi chú nội bộ và nhãn [CẦN XÁC NHẬN] khỏi dữ liệu công khai
const { _ghi_chu, danh_gia, ...cty } = congTy;
write('api/cong-ty.json', json({ du_lieu_test: true, ...cty, giay_phep_lu_hanh: null, doi_ngu: cty.doi_ngu.map(({ ten, vai_tro }) => ({ ten, vai_tro })), chinh_sach: { ...cty.chinh_sach, thanh_toan: clean(cty.chinh_sach.thanh_toan) } }));

// ---------- OpenAPI 3.1.0 ----------
const problemRef = { $ref: '#/components/responses/NotFound' };
const openapi = {
  openapi: '3.1.0',
  info: {
    title: 'Gió Nồm Travel – API chỉ đọc',
    version: '1.0.0',
    summary: 'Tour, giá, lịch khởi hành và thông tin liên hệ của Gió Nồm Travel (dữ liệu test).',
    description: 'File JSON tĩnh sinh từ data/*.json lúc build. Không cần xác thực. Chỉ hỗ trợ GET và HEAD; phương thức khác trả 405 dạng application/problem+json (RFC 9457). Đặt chỗ qua Zalo, API không nhận đặt chỗ.',
  },
  servers: [{ url: '/' }],
  paths: {
    '/api/tours.json': { get: { operationId: 'listTours', summary: 'Danh sách 5 tour', responses: { 200: { description: 'Danh sách tour', content: { 'application/json': { schema: { $ref: '#/components/schemas/TourList' } } } } } } },
    '/api/tours/{slug}.json': {
      get: {
        operationId: 'getTour', summary: 'Chi tiết một tour, gồm lịch trình và chuyến sắp tới',
        parameters: [{ name: 'slug', in: 'path', required: true, schema: { type: 'string', enum: tours.map((t) => t.slug) } }],
        responses: { 200: { description: 'Chi tiết tour', content: { 'application/json': { schema: { $ref: '#/components/schemas/TourDetail' } } } }, 404: problemRef },
      },
    },
    '/api/lich.json': { get: { operationId: 'listDepartures', summary: 'Mọi chuyến đã mở bán và số chỗ còn lại', responses: { 200: { description: 'Lịch khởi hành', content: { 'application/json': { schema: { $ref: '#/components/schemas/Schedule' } } } } } } },
    '/api/cong-ty.json': { get: { operationId: 'getCompany', summary: 'Liên hệ, cam kết, chính sách đặt cọc và huỷ, câu hỏi thường gặp', responses: { 200: { description: 'Thông tin công ty', content: { 'application/json': { schema: { $ref: '#/components/schemas/Company' } } } } } } },
  },
  components: {
    responses: {
      NotFound: { description: 'Không có tài nguyên', content: { 'application/problem+json': { schema: { $ref: '#/components/schemas/Problem' } } } },
    },
    schemas: {
      MainStop: { type: 'object', required: ['ten', 'gio'], properties: { ten: { type: 'string' }, gio: { type: 'string', description: 'Giờ đoàn tới điểm chính, HH:MM' } } },
      TourSummary: {
        type: 'object',
        required: ['slug', 'ten', 'ten_ngan', 'thoi_luong', 'gio', 'gia_nguoi_lon', 'nhom_toi_da', 'lich', 'dang_mo_ban', 'diem_chinh', 'url', 'api'],
        properties: {
          slug: { type: 'string' }, ten: { type: 'string' }, ten_ngan: { type: 'string' }, vung: { type: 'string' },
          thoi_luong: { type: 'string' }, gio: { type: 'string' },
          gia_nguoi_lon: { type: 'integer', description: 'VND' }, gia_tre_em: { type: ['integer', 'null'], description: 'VND, trẻ 1–1,4 m' },
          nhom_toi_da: { type: 'integer' }, lich: { type: 'string' }, dang_mo_ban: { type: 'boolean' },
          diem_chinh: { $ref: '#/components/schemas/MainStop' }, url: { type: 'string' }, api: { type: 'string' },
        },
      },
      TourList: { type: 'object', required: ['cap_nhat', 'tours'], properties: { cap_nhat: { type: 'string', format: 'date' }, du_lieu_test: { type: 'boolean' }, tours: { type: 'array', items: { $ref: '#/components/schemas/TourSummary' } } } },
      Stop: { type: 'object', required: ['gio', 'ten'], properties: { gio: { type: 'string' }, ten: { type: 'string' }, mo_ta: { type: 'string' }, toa_do: { type: 'array', items: { type: 'number' }, minItems: 2, maxItems: 2, description: '[vĩ độ, kinh độ]' } } },
      Departure: { type: 'object', required: ['ngay', 'ma_chuyen', 'con_cho'], properties: { tour: { type: 'string' }, ngay: { type: 'string', format: 'date' }, ma_chuyen: { type: 'string' }, con_cho: { type: 'integer', minimum: 0, maximum: 12 } } },
      TourDetail: {
        allOf: [{ $ref: '#/components/schemas/TourSummary' }, {
          type: 'object',
          required: ['lich_trinh', 'bao_gom', 'chua_gom', 'chuyen_sap_toi'],
          properties: {
            mo_ta_ngan: { type: 'string' }, diem_nhan: { type: 'array', items: { type: 'string' } },
            lich_trinh: { type: 'array', items: { $ref: '#/components/schemas/Stop' } },
            bao_gom: { type: 'array', items: { type: 'string' } }, chua_gom: { type: 'array', items: { type: 'string' } },
            nen_mang: { type: 'array', items: { type: 'string' } }, luu_y: { type: 'string' },
            phu_thu_phong_don: { type: ['integer', 'null'] },
            chuyen_sap_toi: { type: 'array', items: { $ref: '#/components/schemas/Departure' } },
          },
        }],
      },
      Schedule: { type: 'object', required: ['cap_nhat', 'chuyen'], properties: { cap_nhat: { type: 'string', format: 'date' }, du_lieu_test: { type: 'boolean' }, chuyen: { type: 'array', items: { $ref: '#/components/schemas/Departure' } } } },
      Company: { type: 'object', required: ['ten', 'dien_thoai', 'zalo', 'email', 'dia_chi'], properties: { ten: { type: 'string' }, dien_thoai: { type: 'string' }, zalo: { type: 'string', format: 'uri' }, email: { type: 'string' }, dia_chi: { type: 'string' }, gio_lam_viec: { type: 'string' } }, additionalProperties: true },
      Problem: {
        type: 'object', description: 'RFC 9457 Problem Details',
        required: ['type', 'title', 'status', 'code'],
        properties: { type: { type: 'string' }, title: { type: 'string' }, status: { type: 'integer' }, detail: { type: 'string' }, instance: { type: 'string' }, code: { type: 'string', enum: ['not_found', 'method_not_allowed'] }, hint: { type: 'string' } },
      },
    },
  },
};
write('openapi.json', json(openapi));

// ---------- llms.txt (llmstxt.org) ----------
const llms = `# Gió Nồm Travel

> Công ty tour ghép nhóm nhỏ ở Đà Nẵng (dữ liệu thử nghiệm): 5 tour quanh Đà Nẵng, Hội An, Huế, tối đa 12 khách mỗi xe, giá đã gồm vé, đặt chỗ qua Zalo ${congTy.dien_thoai}.

Mọi trang trả bản Markdown khi gửi header \`Accept: text/markdown\`. Dữ liệu JSON mô tả trong OpenAPI 3.1.

## Trang

- [Trang chủ](/index.md): năm tour, cam kết, cách đặt, câu hỏi thường gặp
- [Danh mục tour](/tour.md): bảng giá và lịch của 5 tour
- [Lịch khởi hành](/lich-khoi-hanh.md): chuyến và chỗ còn trong 4 tuần tới
- [Liên hệ](/lien-he.md): Zalo, điện thoại, chính sách cọc và huỷ

## Tour

${tours.map((t) => `- [${t.ten_ngan}](/tour/${t.slug}.md): ${t.thoi_luong}, người lớn ${vnd(t.gia_nguoi_lon)}`).join('\n')}

## API

- [OpenAPI 3.1](/openapi.json): mô tả 4 endpoint GET
- [Danh sách tour](/api/tours.json)
- [Lịch khởi hành](/api/lich.json)
- [Thông tin công ty](/api/cong-ty.json)
`;
write('llms.txt', llms);

console.log(`agent-files: ${4 + tours.length} Markdown, ${3 + tours.length} JSON, openapi.json, llms.txt`);
