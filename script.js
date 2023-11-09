const body = document.querySelector('body');
body.addEventListener('mousemove', (e) => {
  body.style.setProperty('--x', e.clientX / window.innerWidth);
  body.style.setProperty('--y', e.clientY / window.innerHeight);
});