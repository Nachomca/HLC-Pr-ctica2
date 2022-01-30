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


function comprobar()
{
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
}

function validacion() {

	//Para el campo no vacío
	valor = document.getElementById("nombre").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	  alert("Debes introducir el nombre !");
	  console.log("Excepcion nombre");
	  return false;
	}
	
	valor = document.getElementById("telefono").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	  alert("Debes introducir el teléfono !");
	  console.log("Excepcion teléfono");
	  return false;
	}
	
	valor = document.getElementById("mail").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	  alert("Debes introducir un correo electrónico !");
	  console.log("Excepcion mail");
	  return false;
	}
	
	valor = document.getElementById("post").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	  alert("Debes poner algún comentario !");
	  console.log("Excepcion comentario");
	  return false;
	}
	
	valor = document.getElementById("nota").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	  alert("Debes darnos alguna nota !");
	  console.log("Excepcion nota");
	  return false;
	}
	
	// Para que sean números en teléfono
	valor = document.getElementById("telefono").value;
	if( isNaN(valor) ) {
	  alert("El teléfono debe ser numérico !");
	  console.log("Excepcion telefono not num");
	  return false;
	}
	
	// Para que sean números en edad
	valor = document.getElementById("edad").value;
	if( isNaN(valor) ) {
	  alert("La edad debe ser numérico !");
	  console.log("Excepcion edad not num");
	  return false;
	}
	
	// dirección mail
	valor = document.getElementById("mail").value;
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(regex.test(valor)){
	  alert(" Gracias por contactar con nosotros! \n En breve nos pondremos en contacto con usted.");
	} else if(!regex.test(valor)){
		alert("Mail Incorrecto !");
		return false;
	  }
		
	// Siempre se realiza al final
	  return true; 
}