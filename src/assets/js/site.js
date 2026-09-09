(function () {
  const nav = document.querySelector('[data-component="top-nav"]');
  if (!nav) return;

  const toggle = nav.querySelector('[data-nav-toggle]');
  const menu = nav.querySelector('[data-nav-menu]');
  if (!toggle || !menu) return;

  const setOpen = (isOpen) => {
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menu.dataset.open = isOpen ? 'true' : 'false';
  };

  const closeNav = () => setOpen(false);

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!expanded);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 900px)').matches) {
        closeNav();
      }
    });
  });

  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 900px)').matches) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNav();
    }
  });

  closeNav();
})();
