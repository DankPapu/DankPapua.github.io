// Obtener el elemento de un botón o enlace que activará la acción.
var toggleButton = document.getElementById("toggleButton");

// Obtener el elemento que se mostrará u ocultará.
var hiddenContent = document.getElementById("hiddenContent");

// Agregar un evento click al botón para alternar la visibilidad del contenido.
toggleButton.addEventListener("click", function() {
  if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
    hiddenContent.style.display = "block";
  } else {
    hiddenContent.style.display = "none";
  }
});
