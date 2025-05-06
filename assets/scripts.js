// ========== Spocky Games - scripts.js ==========


// Navbar: flip
document.querySelectorAll('.icon-flip').forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
      icon.classList.add('flipped');
    });
    icon.addEventListener('mouseleave', function() {
      icon.classList.remove('flipped');
    });
    icon.addEventListener('touchstart', function(e) {
      icon.classList.toggle('flipped');
      e.preventDefault();
    }, {passive: false});
    icon.addEventListener('focus', function() {
      icon.classList.add('flipped');
    });
    icon.addEventListener('blur', function() {
      icon.classList.remove('flipped');
    });
  });
  
  // Navbar: Hambúrguer
  function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
  }
  
  // Header
  const header = document.querySelector('.header');
  if (header) {
    let prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', function() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        header.classList.remove('hide');
      } else {
        header.classList.add('hide');
      }
      prevScrollpos = currentScrollPos;
    });
  }
  
  // Navbar: Hambúrguer Abrir e Fechar 
  function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('open');
  }
  
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      const navUl = document.querySelector('nav ul');
      navUl.classList.remove('open');
    });
  });