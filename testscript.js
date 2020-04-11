
function nuevoPartido (){
  partidoListContainer = $('.partidoListContainer');
  numero = partidoListContainer.children().length + 1;
  partido = $('<div class="partidoList">Partido'+numero+'</div>').attr('data-name','Partido'+numero); ;
  lista = $('<ul class="listaPartidosPrincipal">\
            </ul>');

  partido.append(lista);
  partidoListContainer.append(partido);

  update();
}

function updateP ( partido, listaPartidos){

  div = $('.partidoList[data-name="'+partido+'"]');

  for (i = div.children().length; i < listaPartidos.length; i++) {
    li = $('<li class="ui-state-default OwO">'+listaPartidos[i]+' </li>');
    div.append(li);
  }

  

}

function update (){

  partidoListContainer = $('.partidoListContainer');

  array = [];

  /*
  for (i = 0; i < partidoListContainer.children().length; i++) {
    console.log(partidoListContainer.children().contents());
    //array.push(partidoListContainer.children().contents()[i].nodeValue);
  }
*/


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

  $( ".listaPartidosPrincipal" ).sortable();
  $( ".listaPartidosPrincipal" ).disableSelection();
}