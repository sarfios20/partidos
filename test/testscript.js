
function nuevoPartido (){
  partidoListContainer = $('.partidoListContainer');
  numero = partidoListContainer.children().length + 1;
  partido = $('<div class="partidoList"></div>').attr('data-name','Partido'+numero);
  h1 = $('<h1 class="editable">Partido'+numero+'</h1>').attr('data-name','Partido'+numero);
  lista = $('<ul class="listaPartidosPrincipal">\
            </ul>');

  partido.append(h1);
  partido.append(lista);
  partidoListContainer.append(partido);

  update();
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

function updateP ( partido, lista){
  listaPartidos = lista.slice();
  listaPartidos.splice(listaPartidos.indexOf(partido), 1);

  div = $('.partidoList[data-name="'+partido+'"] ul');
  div.empty();

  li = $('<li class="ui-state-default OwO" onclick="change(this)">'+partido+' </li>');
  div.append(li);

  for (i = div.children().length-1; i < listaPartidos.length; i++) {
    li = $('<li class="ui-state-default OwO" onclick="change(this)">'+listaPartidos[i]+' </li>').attr('data-name',listaPartidos[i]);
    div.append(li);
  }

  e = $('<li class="ui-state-default OwO">\
          Elecciones </li>');
  div.append(e);
}

function update (){

  partidoListContainer = $('.partidoListContainer');

  array = [];

  
  for (i = 0; i < partidoListContainer.children().length; i++) {
    UwU = $('.partidoList h1');
    array.push(UwU[i].innerText);
  }

  array.forEach(function( p ) {
    updateP(p, array);
  });

  numero = partidoListContainer.children().length;

  console.log(numero);

  //nuevoPartidoD(numero);
  partidoHeader();
  //partidoGobernar(numero);
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

  $( ".listaPartidosPrincipal" ).sortable();
  $( ".listaPartidosPrincipal" ).disableSelection();
  $(".editable").bind("dblclick", replaceHTML);
}