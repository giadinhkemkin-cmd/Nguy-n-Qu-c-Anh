// Giờ lật kiểu bảng lật số ở bến xe: mỗi ký tự số chạy qua vài giá trị rồi dừng đúng giờ.
// Lấy ý từ các demo split-flap (Codrops), tự viết bằng GSAP. Reduced-motion: không gọi hàm này.
import { gsap } from 'gsap';
const DIGITS = '0123456789';
export function flap(el, target, { delay = 0, from, steps = 6 } = {}) {
  el._flap?.kill(); // ngắt lượt lật cũ khi cuộn nhanh (interruptible)
  const start = (from ?? el.textContent).padEnd(target.length, '0');
  el.setAttribute('aria-label', target);
  const chars = target.split('');
  const state = { t: 0 };
  el.textContent = start;
  return (el._flap = gsap.to(state, {
    t: 1, duration: 0.55, delay, ease: 'power2.out',
    onUpdate() {
      const k = state.t;
      el.textContent = chars.map((c, i) => {
        if (!DIGITS.includes(c)) return c;
        const local = Math.min(1, Math.max(0, k * 1.6 - i * 0.12));
        if (local >= 1) return c;
        const n = (Number(start[i]) || 0) + Math.floor(local * steps);
        return String(n % 10);
      }).join('');
    },
    onComplete() { el.textContent = target; },
  }));
}
