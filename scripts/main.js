$(document).ready(main);

var contador = 1;

function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
}

var formularioPrincipal = document.getElementById("formulario");
var primerElemento = document.getElementById("elemento");
var valor = document.getElementById("texto").value;
var elementos = document.getElementsByName("pregunta");

for(var i=0; i<elementos.length; i++) {
	console.log(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
}

var elemento = document.getElementById("condiciones");
console.log(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);
 
elemento = document.getElementById("privacidad");
console.log(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);

// Obtener la referencia a la lista
var lista = document.getElementById("opciones");
 
// Obtener el índice de la opción que se ha seleccionado
var indiceSeleccionado = lista.selectedIndex;
// Con el índice y el array "options", obtener la opción seleccionada
var opcionSeleccionada = lista.options[indiceSeleccionado];
 
// Obtener el valor y el texto de la opción seleccionada
var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = opcionSeleccionada.value;
 
console.log("Opción seleccionada: " + textoSeleccionado + "\n Valor de la opción: " + valorSeleccionado);