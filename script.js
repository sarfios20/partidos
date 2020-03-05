$( function() {
  $( ".sec" ).sortable();
  $( ".connectedSortable" ).sortable({
    items: "li:not(.ui-state-disabled)"
  });
  $( ".connectedSortable" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();
  $(".editable").bind("dblclick", replaceHTML);
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

function formarCoalicion(partido, lista){
  listas = desarrollar(lista);

  listas.forEach(function( l ) {
      l.push(partido);
  });

  appendParties(partido, "Coalicion", listas);
}

function GobiernoAmigo(partido, lista){
  listaAmigos = lista.slice(0, lista.indexOf('Elecciones'));
  listas = desarrollar(listaAmigos);

  appendParties(partido, "Amigo", listas);
}

function Elecciones(partido){
  listas = [["Elecciones"]];
  appendParties(partido, "Elecciones", listas);
}

function Enemigo(partido, lista){
  listas = [[]];

  lista.forEach(function( enemigo ) {
    listas.push([enemigo]);
  });
  listas.shift();
  appendParties(partido, "Enemigo", listas);
}

function ApoyoEnemigos(partido, sinRojosE, listaEnemigos){

  if(listaEnemigos.length > 0){

    final = [[]];
    listap = sinRojosE.concat(listaEnemigos);

    sinRojosE.forEach(function( p ) {
      otra = listap.slice();
      otra.splice(otra.indexOf(p), 1);
      omg = desarrollar(otra);
      omg.forEach(function( l ) {
        listaEnemigos.some(function( enemigo ) {
          if(l.includes(enemigo)){
            if(l.indexOf(p) < 0){
              l.unshift(p);
            }
            final.push(l);
          }
        });
      });
    });

    let uniqueArray = new Set(final);
    final2= Array.from(uniqueArray);
    final2.shift();
    appendParties(partido, "ApoyoEnemigos", final2);
  }
}

function CoalicionEnemiga(partido, listaEnemigos, listaTodos){

  final = [[]];

  copy = listaTodos.slice();
  
  listaEnemigos.forEach(function( enemigo ) {

    console.log(enemigo);
    what = copy.slice();
    what.splice(what.indexOf(enemigo), 1);
    aux = desarrollar(what);

    aux.forEach(function( l ){
      l.unshift(enemigo);
    });

    final = final.concat(aux);
  });

  final.shift();

  appendParties(partido, "CoalicionEnemiga", final);
}

function update(){
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
    Enemigo(partido, listarojos);

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

function todos(partido){
  lista = listaPartido(partido);

  listaArray = [];

  lista.each(function( index ) {
    listaArray.push($(this).text());
  });

  listaArray.splice(listaArray.indexOf("Elecciones"), 1);

  return listaArray;
}

function niRojosNiElecciones(partido){
  listaSinRojos = getSinRojos(partido);

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
  listaArray.splice(partido, 1);
  return listaArray;
}

function listaPartido(partido){
  div = $('#listas div > [data-name="'+partido+'"]').parent();
  lista = div.children("ul").children("li");

  return lista;
}

function rojos(partido){ 
  lista = listaPartido(partido);

  listaRojos = lista.filter(function( index ) {
    return $(this).css('color') === 'rgb(255, 0, 0)'
  });

  listaArray = [];
  listaRojos.each(function( index ) {
    listaArray.push($(this).text());
  });

  return listaArray;
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
    <ul id="sortable3" class="connectedSortable Elecciones">\
      <h2 class="ui-state-disabled">Elecciones</h2>\
    </ul>\
  </li>\
  <li>\
    <ul id="sortable3" class="connectedSortable ApoyoEnemigos">\
      <h2 class="ui-state-disabled">Gobierno Apoyado por enemigos</h2>\
    </ul>\
  </li>\
    <li>\
    <ul id="sortable3" class="connectedSortable CoalicionEnemiga">\
      <h2 class="ui-state-disabled">Gobierno Coalicion enemiga</h2>\
    </ul>\
  </li>\
    <li>\
    <ul id="sortable3" class="connectedSortable Enemigo">\
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

function python() {
  $.ajax({
    url: "partidos.php",
    type: "post",
//    data: {id: ID} ,
        success: function (response) {
          console.log(response)
        },
        error: function(jqXHR, textStatus, errorThrown) {
           //console.log(textStatus, errorThrown);
        }
  });
}

function replaceHTML(){
    oldText = $(this).html().replace(/"/g, "");
    $(this).html("").html("<form><input type=\"text\" class=\"editBox\" value=\"" + oldText + "\" /> </form><a href=\"#\" class=\"btnSave\">Save changes</a> <a href=\"#\" class=\"btnDiscard\">Discard changes</a>");
}

function change(elemt){
    console.log(elemt);

    if (elemt.style.color != "red"){
      elemt.style.color = "red";
    }else{
      elemt.style.color = "black";
    }
}

$(document).on("click", ".btnSave",
    function()
    {
      var msglist = $(this).parent();

    var show = msglist.data("name");

        newText = $(this).siblings("form")
                         .children(".editBox")
                         .val().replace(/"/g, "");
                          
        $(this).parent()
               .html(newText);
        lel = "."+show;

        $('[data-name="'+show+'"]').html(newText);
        $('[data-name="'+show+'"]').attr('data-name',newText); 
    }
);

Array.prototype.swapItems = function(a, b){
    this[a] = this.splice(b, 1, this[a])[0];
    return this;
}