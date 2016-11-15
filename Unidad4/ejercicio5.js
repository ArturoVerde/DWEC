var numero = document.body.getElementsByTagName("a").length;
document.write("Número de enlaces a la pagina: " + numero);

document.write("<br>Dirección a la que enlaza el penúltimo enlace: " + document.body.getElementsByTagName("a")[numero-2]);

var var1 = document.body.getElementsByTagName("a");
var contador = 0;
for (var i = 0; i < var1.length; i++) {
  if(var1[i].getAttribute("href") == "http://prueba"){
    contador++;
  }
}
document.write("<br>Numero de enlaces que enlazan a http://prueba: " + contador);

document.write("<br>Número de enlaces del tercer párrafo: " + document.getElementsByTagName("p")[2].getElementsByTagName("a").length);
