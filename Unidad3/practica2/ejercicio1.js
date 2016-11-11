var Tiempo = new Object();
var Ventana = undefined;

Tiempo.reiniciar = function () {
  clearInterval(Tiempo.timer);
  Ventana.document.body.innerHTML = "<h2>00:00:00</h2>";
}

Tiempo.empezar = function () {
  if (Ventana == undefined)
  Ventana = window.open("","cronometro", "width=700,height=300");
  else if (Ventana.document == undefined)
  Ventana = window.open("","cronometro", "width=700,height=300");
  Tiempo.inicio = new Date();
  Tiempo.timer = setInterval (Tiempo.contar, 100);
}

Tiempo.contar = function () {
  if (Ventana.document == undefined){
    Ventana = undefined;
    return;
  }
  var ahora = new Date();
  var fecha = new Date((ahora.getTime() - Tiempo.inicio.getTime()));
  var hora = Tiempo.resetear(fecha.getHours() -1);
  var minuto = Tiempo.resetear(fecha.getMinutes());
  var segundo = Tiempo.resetear(fecha.getSeconds());
  Ventana.document.body.innerHTML =  hora + ":" + minuto + ":" + segundo;
}

Tiempo.resetear = function (numero) {
  if (numero < 10)
  return "0" + numero;
  else
  return numero;
}
