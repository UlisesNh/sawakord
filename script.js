document.getElementById("showRosesButton").addEventListener("click", function() {
  const roseContainer = document.getElementById("roseContainer");
  const body = document.body;
  const audio = new Audio("turning.mp3"); // Cambia "Turning page.mp3" por la ruta de tu canción

  roseContainer.innerHTML = "<img src='rosas.png' alt='Ramo de Rosas'>";
  roseContainer.style.display = "block";
  audio.play();
  body.style.backgroundImage = "url('estrellas.gif')"; // Cambiar al nuevo fondo con estrellas
});
