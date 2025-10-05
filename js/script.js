/* ---------- スムーススクロール ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    }
  });
});


/* ---------- ハンバーガー開閉 & ×アイコン ---------- */
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');
const navLinks  = nav.querySelectorAll('a');


hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');       // メニュー表示/非表示
  hamburger.classList.toggle('active'); // ← ★ 3本線⇔× の切替
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('active'); // ← ★ × を戻す
  });
});



