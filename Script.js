// Lógica para abrir y cerrar la barra lateral de filtros en móviles sin recargar
  const btnAbrir = document.getElementById('btn-abrir-filtros');
  const btnCerrar = document.getElementById('btn-cerrar-filtros');
  const sidebar = document.querySelector('.sidebar');

  if (btnAbrir && btnCerrar && sidebar) {
    btnAbrir.addEventListener('click', () => {
      sidebar.classList.add('abierto');
    });

    btnCerrar.addEventListener('click', () => {
      sidebar.classList.remove('abierto');
    });
  }