// FISIOCEN - JS ligero
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('mainNav');

  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !btn.contains(e.target)) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function(el){ el.classList.add('visible'); });
    return;
  }

  var io = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(function(el){ io.observe(el); });
})();
