import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
export const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1, smoothWheel: true, syncTouch: false });
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
export { gsap, ScrollTrigger, lenis };
