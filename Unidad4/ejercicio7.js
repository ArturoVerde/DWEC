document.body.getElementsByTagName("p")[1].setAttribute("class", "oculto");
function modificar() {
  document.body.getElementsByTagName("p")[1].setAttribute("class", "visible");
  document.body.getElementsByTagName("p")[0].setAttribute("class", "oculto");
}
function eliminar() {
  document.body.getElementsByTagName("p")[1].innerHTML = "";
}
