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
});

// Cerrar login si se hace clic fuera del formulario
loginModal?.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.classList.add('hidden');
  }
});
