// ========== Spocky Games - scripts.js ==========
// Este arquivo centraliza os scripts JS do seu site.
// Adicione novos scripts aqui para manter o código organizado.

// Navbar: Efeito flip para ícones sociais (contato e footer)
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
  
  // Navbar: Exemplo de menu hambúrguer (adicione sua lógica se necessário)
  function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
  }
  
  // Header: Ocultar ao rolar para baixo (opcional, remova se não usar)
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
  
  // Adicione outros scripts personalizados abaixo conforme necessário

  function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('open');
  }
  
  // Opcional: Fechar menu ao clicar em um link (mobile UX)
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      const navUl = document.querySelector('nav ul');
      navUl.classList.remove('open');
    });
  });