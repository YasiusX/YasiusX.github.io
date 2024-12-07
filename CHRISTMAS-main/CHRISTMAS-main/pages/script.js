// Selección de los elementos
const botonSi = document.getElementById('botonSi');
const botonNo = document.getElementById('botonNo');
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrarModal');

// Evento para el botón "Sí"
botonSi.addEventListener('click', () => {
    // Mostrar el modal en el centro de la pantalla
    modal.style.display = 'flex';
});

// Evento para el botón "No"
botonNo.addEventListener('mouseover', () => {
    // Generar una posición aleatoria para mover el botón "No"
    const x = Math.random() * (window.innerWidth - botonNo.clientWidth);
    const y = Math.random() * (window.innerHeight - botonNo.clientHeight);
    botonNo.style.position = "absolute";
    botonNo.style.left = `${x}px`;
    botonNo.style.top = `${y}px`;
});

// Evento para cerrar el modal al hacer clic en "Aceptar"
cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
