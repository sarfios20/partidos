
function nuevoPartidoMiniLista (index, contenedor){
  partido = $('<div class="partidoList"></div>').attr('data-name','Partido'+index);
  h1 = $('<h1 class="editable">Partido'+index+'</h1>')
  lista = $('<ul class="MiniListaPartido">\
            </ul>');

  li = $('<li class="ui-state-default OwO">Partido'+index+' </li>').attr('data-name','Partido'+index);
  lista.append(li);

  e = $('<li class="ui-state-default OwO">\
        Elecciones </li>');
  lista.append(e);

  partido.append(h1);
  partido.append(lista);
  contenedor.append(partido);



  $( ".MiniListaPartido" ).sortable();
  $( ".MiniListaPartido" ).disableSelection();

  update();
}

function ListaNombres (contenedor, elemento){
  elementos = $(contenedor).find(elemento);
  nombresPartidos = [];

  for (i = 0; i < elementos.length; i++) {
    nombresPartidos.push(elementos[i].innerText);
  }
  return nombresPartidos;
}

/*

function ListaNombresMiniLista (){
  MiniListaPartido = $('.MiniListaPartido');

  nombresPartidos = [];

  for (i = 0; i < MiniListaPartido.children().length; i++) {
    nombre = $('.partidoList li');
    nombresPartidos.push(nombre[i].innerText);
  }
  return nombresPartidos;
}

function ListaNombresPartidos (){
  ContainerMiniListas = $('.ContainerMiniListas');

  nombresPartidos = [];

  for (i = 0; i < ContainerMiniListas.children().length; i++) {
    nombre = $('.partidoList h1');
    nombresPartidos.push(nombre[i].innerText);
  }
  return nombresPartidos;
}*/

function nuevoPartido (){
  ContainerMiniListas = $('.ContainerMiniListas');
  numero = ContainerMiniListas.children().length + 1;
  nuevoPartidoMiniLista (numero, ContainerMiniListas);
  /*partido = $('<div class="partidoList"></div>').attr('data-name','Partido'+numero);
  h1 = $('<h1 class="editable">Partido'+numero+'</h1>').attr('data-name','Partido'+numero);
  lista = $('<ul class="MiniListaPartido">\
            </ul>');

  partido.append(h1);
  partido.append(lista);
  ContainerMiniListas.append(partido);

  update();*/
}

$(document).on("click", ".btnSave",
    function()
    {
      var msglist = $(this).parent();

      var show = msglist.data("name");

      newText = $(this).siblings("form")
                       .children(".editBox")
                       .val().replace(/"/g, "");
      console.log($(this).parent()[0]);
      console.log(newText);
      //$(this).parent().html(newText);
      console.log($(this).parent()[0]);

      $('[data-name="'+show+'"]').html(newText);
      $('[data-name="'+show+'"]').attr('data-name', newText);
    }
);

function replaceHTML(){
    oldText = $(this).html().replace(/"/g, "");
    $(this).html("").html("<form><input type=\"text\" class=\"editBox\" value=\"" + oldText + "\" /> </form><a href=\"#\" class=\"btnSave\">Save changes</a> <a href=\"#\" class=\"btnDiscard\">Discard changes</a>");
}

function change(elemt){
    if (elemt.style.color != "red"){
      elemt.style.color = "red";
    }else{
      elemt.style.color = "black";
    }
}

function updateLista(){

  partidos = $('.partidoPrincipal');
  

  listaPartidos = $('#listas h2').map(function() {
    return $(this).text();
  }).get();
//LUEGO

/*
  seccion = $('.PartidoContainer').children().remove();

  listaPartidos = $('#listas h2').map(function() {
    return $(this).text();
  }).get();

  listaPartidos.forEach(function( partido ) {

    nuevoPartido(partido);
    sinRojosE = niRojosNiElecciones(partido);
    sinRojos = getSinRojos(partido);

    listarojos = rojos(partido);

    completa = todos(partido);

    Gobernar(partido, sinRojosE);
    formarCoalicion(partido, sinRojosE);
    GobiernoAmigo(partido, sinRojos);
    Elecciones(partido);

    ApoyoEnemigos(partido, sinRojosE, listarojos);
    CoalicionEnemiga(partido, listarojos, completa);
    Enemigo(partido, listarojos);*/
}

function updateMiniListaPartido ( partido, lista){

  let nombresMiniListaPartido = ListaNombres('.partidoList[data-name="'+partido+'"]', 'li');

  let difference = lista.filter(x => !nombresMiniListaPartido.includes(x));

  MiniListaPartidos = $('.partidoList[data-name="'+partido+'"] ul');

  for (i = 0; i < difference.length; i++) {
    li = $('<li class="ui-state-default OwO">'+difference[i]+' </li>').attr('data-name', difference[i]);
    MiniListaPartidos.append(li);
  }

}

function updateMiniListas (){

  let nombresPartidos = ListaNombres('.ContainerMiniListas', 'h1');

  nombresPartidos.forEach(function( partido ) {
    updateMiniListaPartido(partido, nombresPartidos);
  });

}

function update (){

  updateMiniListas();

  
  /*ContainerMiniListas = $('.ContainerMiniListas');

  array = [];

  
  for (i = 0; i < ContainerMiniListas.children().length; i++) {
    UwU = $('.partidoList h1');
    array.push(UwU[i].innerText);
  }

  array.forEach(function( p ) {
    updateP(p, array);
  });

  numero = ContainerMiniListas.children().length;

  console.log(numero);

  //nuevoPartidoD(numero);
  partidoHeader();
  //partidoGobernar(numero);*/


}

function partidoHeader (){

  container = $('.partidosContainers');

  jquery = '<ul class="partidoPrincipal">\
  <h1 data-name="Partido" >Partido</h1>'

  /*
  jquery = '<ul class="partidoPrincipal">\
  <h1 data-name="Partido'+index+'" >Partido'+index+'</h1>'
*/
  container.append(jquery);
}

function partidoGobernar (index){

  container = $('.partidoPrincipal');
  
  jquery = '<li class="ui-state-default seccionContainer">\
    <div class= seccion">\
        <h1>Gobernar</h1>\
        <div class="subContainer'+index+'">\
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul>   \
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul> \
        </div> \
    </div>       \
  </li>'

  container.append(jquery);
}

function nuevoPartidoD (index){

  container = $('.partidosContainers');
  
  jquery = '<ul class="partidoPrincipal">\
  <h1 data-name="Partido'+index+'" >Partido'+index+'</h1>\
  <li class="ui-state-default seccionContainer">\
    <div class= seccion">\
        <h1>Gobernar</h1>\
        <div class="subContainer'+index+'">\
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul>   \
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul> \
        </div> \
    </div>       \
  </li>\
  <li class="ui-state-default seccionContainer">\
    <div class= seccion">\
        <h1>Formar Coalicion</h1>\
        <div class="subContainer'+index+'">\
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul>   \
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul> \
        </div> \
    </div>       \
  </li>\
    <li class="ui-state-default seccionContainer">\
    <div class= seccion">\
        <h1>Gobierno Amigo</h1>\
        <div class="subContainer'+index+'">\
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul>   \
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul> \
        </div> \
    </div>\
  </li>\
  </li>\
    <li class="ui-state-default seccionContainer">\
    <div class= seccion">\
        <h1>Elecciones</h1>\
    </div>\
  </li>\
  </li>\
    <li class="ui-state-default seccionContainer">\
    <div class= seccion">\
        <h1>Gobierno neutral / restos</h1>\
        <div class="subContainer'+index+'">\
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul>   \
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul> \
        </div> \
    </div>\
  </li>\
  </li>\
   </li>\
    <li class="ui-state-default seccionContainer">\
    <div class= seccion">\
        <h1>Gobierno con Enemigo</h1>\
        <div class="subContainer'+index+'">\
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul>   \
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul> \
        </div> \
    </div>\
  </li>\
    <li class="ui-state-default seccionContainer">\
    <div class= seccion">\
        <h1>Coalicion enemiga</h1>\
        <div class="subContainer'+index+'">\
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul>   \
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul> \
        </div> \
    </div>\
  </li>\
  </li>\
    <li class="ui-state-default seccionContainer">\
    <div class= seccion">\
        <h1>Gobierno Enemigo</h1>\
        <div class="subContainer'+index+'">\
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul>   \
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul> \
        </div> \
    </div>\
  </li>\
  </li>\
    <li class="ui-state-default seccionContainer">\
    <div class= seccion">\
        <h1>Gobierno Enemigo Apoyado</h1>\
        <div class="subContainer'+index+'">\
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul>   \
        <ul class="conjuntoContainer'+index+' sub">sub\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
          <li class="ui-state-default OwO">Partidos </li>\
        </ul> \
        </div> \
    </div>\
  </li>\
  </ul>'

  container.append(jquery);

  $( ".subContainer"+index ).sortable({
    connectWith: ".subContainer"+index
  }).disableSelection();
  $( ".conjuntoContainer"+index ).sortable({
    connectWith: ".conjuntoContainer"+index
  }).disableSelection();

  $( ".partidoPrincipal" ).sortable();
  $( ".partidoPrincipal" ).disableSelection();

  $( ".MiniListaPartido" ).sortable();
  $( ".MiniListaPartido" ).disableSelection();
  $(".editable").bind("dblclick", replaceHTML);
}