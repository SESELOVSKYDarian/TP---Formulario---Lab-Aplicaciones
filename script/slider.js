function cambiarImagen(ruta) {
  document.querySelector("#imagenSlide").setAttribute("src", ruta);
}

document.querySelector("#radio1").addEventListener("click", () => cambiarImagen("/imagenes/river-1.png"));
document.querySelector("#radio2").addEventListener("click", () => cambiarImagen("/imagenes/river-2.png"));
document.querySelector("#radio3").addEventListener("click", () => cambiarImagen("/imagenes/river-3.png"));
document.querySelector("#radio4").addEventListener("click", () => cambiarImagen("/imagenes/river-4.png"));