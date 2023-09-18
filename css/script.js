// Obtener elementos del DOM
const imagenesPrevias = document.querySelectorAll(".imagen-previa");
const modal = document.getElementById("imagenModal");
const modalContenido = document.getElementById("imagenModalContenido");
const cerrarModal = document.getElementById("cerrarModal");

// Agregar eventos click a las imágenes previas
imagenesPrevias.forEach((imagenPrevia) => {
    imagenPrevia.addEventListener("click", () => {
        const imagenSeleccionada = imagenPrevia.getAttribute("data-img");
        modalContenido.src = imagenSeleccionada;
        modal.style.display = "block";
    });
});

// Cerrar la ventana modal al hacer clic en el botón de cerrar
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar la ventana modal al hacer clic en cualquier lugar fuera de la imagen
window.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        modal.style.display = "none";
    }
});

// JavaScript para controlar el carrusel
const carrusel = document.querySelector('.carrusel');
const btnAnterior = document.querySelector('.btn-anterior');
const btnSiguiente = document.querySelector('.btn-siguiente');
let posicion = 0;

btnAnterior.addEventListener('click', () => {
    if (posicion > 0) {
        posicion--;
        actualizarCarrusel();
    }
});

btnSiguiente.addEventListener('click', () => {
    const cantidadImagenes = carrusel.children.length;
    if (posicion < cantidadImagenes - 1) {
        posicion++;
        actualizarCarrusel();
    }
});

function actualizarCarrusel() {
    const desplazamiento = -posicion * 100 + '%';
    carrusel.style.transform = 'translateX(' + desplazamiento + ')';
}

// Autoavance del carrusel (opcional)
// setInterval(() => {
//     btnSiguiente.click();
// }, 5000); // Cambia de imagen cada 5 segundos (ajusta el tiempo según sea necesario)
