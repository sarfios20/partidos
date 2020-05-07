
function nuevoPartido (){
  partidoListContainer = $('.partidoListContainer');
  numero = partidoListContainer.children().length + 1;
  partido = $('<div class="partidoList"></div>').attr('data-name','Partido'+numero);
  h1 = $('<h1>Partido'+numero+'</h1>');
  lista = $('<ul class="listaPartidosPrincipal">\
            </ul>');

  partido.append(h1);
  partido.append(lista);
  partidoListContainer.append(partido);

  update();
}

function updateP ( partido, listaPartidos){

  div = $('.partidoList[data-name="'+partido+'"] ul');
  div.empty();

  for (i = div.children().length; i < listaPartidos.length; i++) {
    li = $('<li class="ui-state-default OwO">'+listaPartidos[i]+' </li>');
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
  nuevoPartidoD(numero);
  
}

function nuevoPartidoD (index){

  container = $('.partidosContainers');

  jquery = '<ul class="partidoPrincipal">Principal'+index+' \
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
}