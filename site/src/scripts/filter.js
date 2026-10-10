// Lọc danh sách theo nhóm nút. attr: tên thuộc tính data trên item (vd 'loai' hoặc 'tour').
export function wireFilter(groupName, itemsSelector, attr, onChange) {
  const group = document.querySelector(`[data-filter-group="${groupName}"]`);
  if (!group) return;
  const items = [...document.querySelectorAll(itemsSelector)];
  group.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-key]');
    if (!b) return;
    const key = b.dataset.key;
    document.documentElement.classList.add('is-filtering');
    group.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    let shown = 0;
    items.forEach((it) => { const ok = key === 'all' || it.dataset[attr] === key; it.hidden = !ok; if (ok) shown++; });
    onChange?.(shown, key);
  });
}
