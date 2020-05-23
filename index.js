var botonCrearLista = document.getElementById('crearLista');
botonCrearLista.addEventListener('click', crearNuevaLista);

function crearNuevaTarea(evento){
 console.log('Crear una tarea');
 var listaHTML = evento.target.parentElement;
 var contenedorTareas = listaHTML.getElementsByClassName('contenedorTareas')[0];
 var contenedorHTML = contenedorTareas.innerHTML;
 var tarea = listaHTML.getElementsByClassName('tarea')[0].value;
 if(tarea.length > 1){
  listaHTML.getElementsByClassName('tarea')[0].value = '';
  contenedorTareas.innerHTML = contenedorHTML + ('<input type="checkbox"><span>'+tarea+'</span>');
 }
}

function agregarEventoTarea(){
 var listaBotonesTarea = document.getElementsByClassName('crearTarea');
 for(var i=0; i< listaBotonesTarea.length; i++){
   listaBotonesTarea[i].addEventListener('click', crearNuevaTarea);
 }
}
function agregarEventoEliminar(){
  var listaBotonesEliminar= document.getElementsByClassName('eliminar');
  for(var i=0; i< listaBotonesEliminar.length; i++){
    listaBotonesEliminar[i].addEventListener('click', eliminarLista);
  }
}

function eliminarLista(evento){
  var buttonHTML = evento.target;
  var listaPadre = buttonHTML.parentElement;
  var abueloLista = listaPadre.parentElement;
  abueloLista.removeChild(listaPadre);
}

function crearNuevaLista(evento){
  var contenedor = document.getElementById('contenedorListas');
  var htmlContenedor = contenedor.innerHTML;
  contenedor.innerHTML = htmlContenedor + '<div class="lista"><div class="contenedorTareas"></div><input  class="tarea" type="text" placeholder="Nueva tarea"><button  type="button" class="crearTarea btn btn-success">Agregar tarea</button><button type="button" class="eliminar btn btn-danger">Eliminar Lista</button></div>';
  agregarEventoTarea();
  agregarEventoEliminar();
}