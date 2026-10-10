import { defineConfig } from 'astro/config';

// build.format 'file': mỗi trang thành một file .html để mở được trên host tĩnh
// không có rewrite thư mục (artifact). Đường dẫn được đổi sang tương đối sau build.
export default defineConfig({
  build: { format: 'file', inlineStylesheets: 'always', assets: 'assets' },
  compressHTML: true,
  prefetch: false,
  devToolbar: { enabled: false },
});
