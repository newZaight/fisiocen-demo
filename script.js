// script.js
// JS mínimo para rendimiento: año dinámico y navegación suave con offset de cabecera.

(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const header = document.querySelector(".site-header");
  const offset = () => (header ? header.offsetHeight + 8 : 0);

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - offset();
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", targetId);
    });
  });
})();
