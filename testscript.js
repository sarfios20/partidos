$( function(){

});

function nuevoPartido (){
  partidoListContainer = $('.partidoListContainer');
  numero = partidoListContainer.children().length + 1;
  partido = $('<div class="partidoList"></div>');
  lista = $('<ul class="listaPartidosPrincipal">Partido'+numero+'\
            </ul>');

  partido.append(lista);
  partidoListContainer.append(partido);
  

  array = partidoListContainer.children().text().trim();
  array = array.split("            ");

  update();
}

function update (){

  partidoListContainer = $('.partidoListContainer');
  numero = partidoListContainer.children().length;
  nuevoPartidoD(numero);

  
}

function nuevoPartidoD (index){

  container = $('.partidosContainers');

  jquery = '<ul class="partidoPrincipal">Principal'+index+' \
  <li class="ui-state-default seccionContainer">\
    <ul class="subContainer'+index+' seccion">seccion\
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
    </ul>       \
  </li>\
  <li class="ui-state-default seccionContainer">\
    <ul class="subContainer'+index+' seccion">seccion\
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
    </ul>       \
  </li>\
  <li class="ui-state-default seccionContainer">\
    <ul class="subContainer'+index+' seccion">seccion\
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
    </ul>       \
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
}