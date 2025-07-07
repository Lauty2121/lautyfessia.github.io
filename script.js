// Toggle menú lateral
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('visible');
});

// Toggle login modal
const userBtn = document.getElementById('user-btn');
const loginModal = document.getElementById('login-modal');

userBtn.addEventListener('click', () => {
  loginModal.classList.toggle('hidden');
  // Opcional: cerrar sidebar si está abierto
  if (sidebar.classList.contains('visible')) {
    sidebar.classList.remove('visible');
  }
});

// Cerrar login si se hace clic fuera del formulario
loginModal?.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.classList.add('hidden');
  }
});

// Modo oscuro / claro toggle
const darkmodeBtn = document.getElementById('darkmode-btn');

darkmodeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
