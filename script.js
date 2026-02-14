// ==========================
// FISIOCEN ALBACETE S.L.
// JS ligero y sin librerías
// ==========================

(function () {
  // Año dinámico en el footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Menú móvil
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("mainNav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Animaciones suaves al entrar en viewport
  var revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
    return;
  }

  var io = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(function (el) { io.observe(el); });
})();
