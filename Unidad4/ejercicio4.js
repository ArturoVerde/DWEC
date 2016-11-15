setTimeout(function (){
  var arrH1 = document.body.getElementsByTagName("h1");
  for (var i = 0; i < arrH1.length; i++) {
    arrH1[i].innerHTML = "Elemento h1";
  }

  var Destacado = document.getElementsByClassName("destacado");
  for (var i = 0; i < Destacado.length; i++) {
    Destacado[i].style.fontWeight = "bold";
  }

  var Resultado = document.getElementById("resultado");
  Resultado.style.display = "none";

  var Sugerencia = document.getElementsByName("sugerencia");
  for (var i = 0; i < Sugerencia.length; i++) {
    Sugerencia[i].setAttribute("required", "required");
  }
}, 3000);

function mostrar(){
  var Resultado = document.getElementById("resultado");
  Resultado.style.display = "inline";
}
