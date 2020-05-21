var botonCrearLista = document.getElementById('crearLista');
botonCrearLista.addEventListener('click', crearNuevaLista);

function crearNuevaTarea(){
 console.log('Crear una tarea');
}

function agregarEventoTarea(){
 var listaBotonesTarea = document.getElementsByClassName('crearTarea');
 for(var i=0; i< listaBotonesTarea.length; i++){
   listaBotonesTarea[i].addEventListener('click', crearNuevaTarea);
 }
}

function crearNuevaLista(evento){
  var contenedor = document.getElementById('contenedorListas');
  var htmlContenedor = contenedor.innerHTML
  contenedor.innerHTML = htmlContenedor + '<div class="lista"><button  type="button" class="crearTarea btn btn-success">Agregar tarea</button></div>';
  agregarEventoTarea();
}