/* HADES – chỉnh menu cho bản test: ẩn Recruitment, thêm Shop the look */
(function () {
  var LINK = '/pages/lookbook?view=lookbook', LABEL = 'SHOP THE LOOK';
  function run() {
    document.querySelectorAll('a[href*="/pages/tuyen-dung"]').forEach(function (a) {
      var li = a.closest('li'); if (!li || li.dataset.hlbDone) return;
      li.dataset.hlbDone = '1';
      var n = li.cloneNode(true), b = n.querySelector('a');
      b.href = LINK; b.title = LABEL; b.textContent = LABEL;
      if (location.pathname.indexOf('/pages/lookbook') === 0) n.classList.add('active');
      li.parentNode.insertBefore(n, li);
      li.style.display = 'none';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
