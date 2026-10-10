import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, CustomEase);
// Đường cong GSAP trùng token CSS (--ease-out, --ease-in-out)
CustomEase.create('gn-out', 'M0,0 C0.23,1 0.32,1 1,1');
CustomEase.create('gn-inout', 'M0,0 C0.77,0 0.175,1 1,1');
export const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis = null;
// Lenis chỉ cho máy có chuột/trackpad: trên điện thoại cuộn gốc đã mượt, khỏi tải thêm JS.
if (!reduce && window.matchMedia('(pointer: fine)').matches) {
  const { default: Lenis } = await import('lenis');
  lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1, smoothWheel: true, syncTouch: false });
  window.__gn && (window.__gn.lenis = lenis);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  // Link neo trong trang cuộn bằng Lenis
  document.addEventListener('click', (e) => {
    const a = e.target.closest?.('a[href^="#"]');
    if (!a || a.getAttribute('href') === '#') return;
    const el = document.querySelector(a.getAttribute('href'));
    if (!el) return;
    e.preventDefault();
    lenis.scrollTo(el, { offset: -72 });
    history.replaceState(null, '', a.getAttribute('href'));
  });
}
window.__gn = { gsap, ScrollTrigger, lenis, reduce };
// Chạy việc không gấp (tạo ScrollTrigger cho phần dưới màn đầu) lúc trình duyệt rảnh
export const idle = (fn) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 1200 }) : setTimeout(fn, 200));
export { gsap, ScrollTrigger, lenis };
