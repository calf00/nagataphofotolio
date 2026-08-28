/* =========================================================
   写真展「鳥瞰図」 サイト用JavaScript
   やっていることは2つだけです。
   1. スクロールすると要素がふわっと表示される
   2. フッターの年号を自動で入れる
   ========================================================= */

// --- 1. スクロールでふわっと表示 -------------------------

// class="fade" が付いた要素をすべて集める
const fadeItems = document.querySelectorAll('.fade');

// IntersectionObserver = 「要素が画面に入ったか」を見張る仕組み
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    // 画面に入ったら .is-visible を付ける（CSS側で表示される）
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // 一度表示したら見張るのをやめる
      observer.unobserve(entry.target);
    }
  });
}, {
  // 要素が15%見えたら発動
  threshold: 0.15
});

// 集めた要素を1つずつ見張りに登録する
fadeItems.forEach(function (item) {
  observer.observe(item);
});


// --- 2. フッターの年号を自動で入れる ---------------------

const yearEl = document.querySelector('#year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
