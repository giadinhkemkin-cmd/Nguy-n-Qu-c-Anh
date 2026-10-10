// Zalo không nhận tin soạn sẵn qua link zalo.me: chép tin vào clipboard rồi mở Zalo, báo khách dán vào.
const toast = document.querySelector('.toast');
let timer;
export function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.hidden = false;
  toast.removeAttribute('data-show');
  void toast.offsetWidth;
  toast.setAttribute('data-show', '');
  clearTimeout(timer);
  timer = setTimeout(() => { toast.hidden = true; }, 4200);
}
document.addEventListener('click', async (e) => {
  const a = e.target.closest?.('[data-zalo]');
  if (!a) return;
  const msg = a.getAttribute('data-msg');
  if (!msg) return;
  try {
    await navigator.clipboard.writeText(msg);
    showToast('Đã chép tin nhắn hỏi chỗ. Mở Zalo rồi dán vào ô chat.');
  } catch {
    showToast('Mở Zalo… Nhắn tên tour, ngày đi và số người giúp Gió Nồm.');
  }
});
