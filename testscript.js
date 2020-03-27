$( function(){
  $( ".partidoPrincipal" ).sortable();
  $( ".partidoPrincipal" ).disableSelection();

  //DINAMICAMENTE POR CADA PARTIDO
  $( ".subContainer1" ).sortable({
    connectWith: ".subContainer1"
  }).disableSelection();
  $( ".subContainer2" ).sortable({
    connectWith: ".subContainer2"
  }).disableSelection();

  $( ".conjuntoContainer1" ).sortable({
    connectWith: ".conjuntoContainer1"
  }).disableSelection();
  $( ".conjuntoContainer2" ).sortable({
    connectWith: ".conjuntoContainer2"
  }).disableSelection();
});

function nuevoPartido (){
  partidoListContainer = $('.partidoListContainer');
  numero = partidoListContainer.children().length;
  partido = $('<div class="partidoList"></div>');
  partidoListContainer.append(partido);
  update();
}

function update (){
  numero = $('.partidosContainers').children().length;
  console.log(numero);
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