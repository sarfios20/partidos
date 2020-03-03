$( function() {
  $( ".sec" ).sortable();
  $( ".connectedSortable" ).sortable({
    items: "li:not(.ui-state-disabled)"
  });
  $( ".connectedSortable" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();

  update();
});

function appendParties(partido, clase, listas){
  seccion = $('#'+partido+" ."+clase);

  listas.forEach(function( lista ) {
    contenedor = $('<li class="ui-state-default contenedorElementos"></li>');
    lista.forEach(function( p ) {
      e = $('<div class="partido" data-name="'+p+'">'+p+'</div>');
      contenedor.append(e);
    });
    //main = $('<div class="partido" data-name="'+partido+'">'+partido+'</div>');
    seccion.append(contenedor);
  });
}

function Gobernar(partido, lista){
  listas = desarrollar(lista);

  listas.forEach(function( l ) {
      l.unshift(partido);
  });

  listas.unshift([partido]);

  appendParties(partido, "Gobierno", listas);
}

function update(){
  seccion = $('.PartidoContainer').children().remove();

  listaPartidos = $('#listas h2').map(function() {
    return $(this).text();
  }).get();

  listaPartidos.forEach(function( partido ) {
    nuevoPartido(partido);
    sinRojosE = niRojosNiElecciones(partido);

    Gobernar(partido, sinRojosE);
    /*
    sinRojo = sinRojos(partido);
    Gobernar(partido, sinRojosE);
    formarCoalicion(partido, sinRojosE);
    GobiernoAmigo(partido, sinRojo);*/
  });
}

function desarrollar(listaArray){

  result = [];
  lorol = [];

  hey = [];

  for (i = 1; i < listaArray.length+1; i++) {  
    result.length = i; //n=2
    forma(listaArray, result.length, lorol);
  }  

  lorol.forEach(function( string ) {
    hey.push(string.split(","));
  });

  return hey;
}

function forma(input, len, listaA){
  combine(input, len, 0, result, listaA);
}


function combine(input, len, start, result, listaA) {
  if(len === 0) {
    listaA.push(result.join(","));
    return;
  }
  for (let i = start; i <= input.length - len; i++) {
    result[result.length - len] = input[i];
    combine(input, len-1, i+1, result, listaA);
  }
}

function niRojosNiElecciones(partido){
  listaSinRojos = getSinRojos(partido);

  listaSinRojos.splice(partido, 1);
  listaSinRojos.splice(listaSinRojos.indexOf('Elecciones'), 1);

  return listaSinRojos;
}

function getSinRojos(partido){
  lista = listaPartido(partido);

  listaSinRojos = lista.filter(function( index ) {
    return $(this).css('color') === 'rgb(0, 0, 0)'
  });
  
  listaArray = [];
  listaSinRojos.each(function( index ) {
    listaArray.push($(this).text());
  });
  return listaArray;
}

function listaPartido(partido){
    div = $('#listas div > [data-name="'+partido+'"]').parent();
    lista = div.children("ul").children("li");

    return lista;
}



function nuevoPartido(partido) {

  html = '<div id='+partido+' class="hey">\
  <h2 class="PartidoName editable" data-name="'+partido+'">'+partido+'</h2>\
  <ul id="sortable1" class="sec">\
  <li>\
    <ul id="sortable3" class="connectedSortable Gobierno">\
      <h2 class="ui-state-disabled">Gobierno</h2>\
    </ul>\
  </li>\
  <li>\
    <ul id="sortable3" class="connectedSortable Coalicion">\
      <h2 class="ui-state-disabled">Formar Coalicion</h2>\
    </ul>\
  </li>\
  <li>\
    <ul id="sortable3" class="connectedSortable Amigo">\
      <h2 class="ui-state-disabled">Gobierno amigo</h2>\
    </ul>\
  </li>\
  <li>\
    <ul id="sortable3" class="connectedSortable">\
      <h2 class="ui-state-disabled">Elecciones</h2>\
    </ul>\
  </li>\
  <li>\
    <ul id="sortable3" class="connectedSortable">\
      <h2 class="ui-state-disabled">Gobierno Apoyado por enemigos</h2>\
    </ul>\
  </li>\
    <li>\
    <ul id="sortable3" class="connectedSortable">\
      <h2 class="ui-state-disabled">Gobierno Coalicion enemiga</h2>\
    </ul>\
  </li>\
    <li>\
    <ul id="sortable3" class="connectedSortable">\
      <h2 class="ui-state-disabled">Gobierno Enemigo</h2>\
    </ul>\
  </li>\
  </ul>\
  </div>';
  
  nuevo = $(html);

  $('.PartidoContainer').append(nuevo);
  $( function(){
    $( ".sec" ).sortable();
    $( ".connectedSortable" ).sortable({
       items: "li:not(.ui-state-disabled)"
    });
    $( ".connectedSortable" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  });
}