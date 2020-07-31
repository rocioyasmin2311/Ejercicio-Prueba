document.addEventListener('DOMContentLoaded', function showLinks() { 
// Numero de enlaces de la pagina
   var enlaces = document.getElementsByTagName("a");
   alert("1.Número de enlaces de la página:" + (enlaces.length));
   // Direccion del penultimo enlace
   var numEnlaces = enlaces.lenght;
   var penultimoEnlace = numEnlaces - numEnlaces + 1;
   var penEnlaces = document.getElementsByTagName("a")[penultimoEnlace];
   alert("2.Dirección a la que enlaza el penúltimo enlace:" + penEnlaces)

   // Numero de enlaces que apuntan a http://prueba
   var myElements = document.querySelectorAll("a[href='http://prueba']").length;
   alert("3.Numero de enlaces que enlazan a http://prueba:" + myElements)
   
  
   // Numero de enlaces del tercer párrafo
   var parrafos = document.getElementsByTagName("p"); 
   
   
});
