// Toggle sidebar & overlay
(function() {
  const burger = document.getElementById('burger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeSidebar');
  const sideLinks = sidebar.querySelectorAll('a');

  function open() {
    sidebar.classList.add('visible');
    overlay.classList.add('visible');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
  }
  function close() {
    sidebar.classList.remove('visible');
    overlay.classList.remove('visible');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
  }

  burger.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = sidebar.classList.contains('visible');
    if (isOpen) close(); else open();
  });

  overlay.addEventListener('click', close);
  closeBtn.addEventListener('click', close);

  // close when clicking a link in sidebar
  sideLinks.forEach(a => a.addEventListener('click', close));

  // close on ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') close();
  });
})();
