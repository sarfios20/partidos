$( function() {
    $( ".sec" ).sortable();
    $( ".connectedSortable" ).sortable({
       items: "li:not(.ui-state-disabled)"
    });
    $( ".connectedSortable" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  } );

function python() {
	$.ajax({
		url: "partidos.php",
		type: "post",
//		data: {id: ID} ,
        success: function (response) {
			console.log(response)
        },
        error: function(jqXHR, textStatus, errorThrown) {
           //console.log(textStatus, errorThrown);
        }

    });
}

function generate(){
	var count = $("#listas").length;
	$("#listas").each(function(){
		g='<li>\
    	<ul id="sortable3" class="connectedSortable">\
    	<h2 class="ui-state-disabled">Gobernar</h2>\
      	<li class="ui-state-default">'+ $(this).attr('id')+'</li>\
    	</ul>\
  		</li>';
  		$(document.body)[0].insertAdjacentHTML('beforeend', html);
  });
}

$(document).ready(function(){
 	$(".editable").bind("dblclick", replaceHTML);

 	 update();
});




function GobiernoAmigo(partido, lista){
  console.log("--"+partido);

  amigos = lista.slice(0, lista.indexOf("Elecciones"));
  listaSinR = sinRojos(partido);
  listaSinR.splice(listaSinR.indexOf('Elecciones'), 1);
  seccion = $('#'+partido+" .Amigo");

  amigos.forEach(function( a ) {
    l = listaSinR.slice();
    l.splice(partido, 1);
    hay = niRojosNiElecciones(a, l);
    console.log(hay);
  });


}

function formarCoalicion(partido, lista){

  listaPartidos = $('#listas [data-name="'+partido+'"').map(function() {
    return $(this).text();
  }).get();

  seccion = $('#'+partido+" .Coalicion");

  lista.forEach(function( miembro ) {
    item = $('<li class="ui-state-default contenedorElementos"></li>');
    miembro.forEach(function( p ) {
      e = $('<div class="partido" data-name="'+p+'">'+p+'</div>');
      item.append(e);
    });
    main = $('<div class="partido" data-name="'+partido+'">'+partido+'</div>');
    item.append(main);
    seccion.append(item);
  });
}

function Gobernar(partido, lista){
	seccion = $('#'+partido+" .Gobierno");
	e = $('<li class="ui-state-default contenedorElementos"></li>');
	solo = $('<div class="partido" data-name="'+partido+'">'+partido+'</div>');
	e.append(solo);
	seccion.append(e);
	lista.forEach(function( miembro ) {
		item = $('<li class="ui-state-default contenedorElementos"></li>');
		main = $('<div class="partido" data-name="'+partido+'">'+partido+'</div>');
		item.append(main);
		miembro.forEach(function( partido ) {
			p = $('<div class="partido" data-name="'+partido+'">'+partido+'</div>');
			item.append(p);
  		});
		seccion.append(item);
  });
}

function update(){
	seccion = $('.PartidoContainer').children().remove();

	listaPartidos = $('#listas h2').map(function() {
    return $(this).text();
	}).get();

  listaPartidos.forEach(function( partido ) {
    nuevoPartido(partido);
    sinRojosE = niRojosNiElecciones(partido);
    sinRojo = sinRojos(partido);
    Gobernar(partido, sinRojosE);
    formarCoalicion(partido, sinRojosE);
    GobiernoAmigo(partido, sinRojo);
  });
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
  $( function() {
    $( ".sec" ).sortable();
    $( ".connectedSortable" ).sortable({
       items: "li:not(.ui-state-disabled)"
    });
    $( ".connectedSortable" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  } );
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
        console.log($('[data-name="'+show+'"]'));
    }
);

function aux(partido){
  lista = listaPartido(partido);

  listaSinRojos = lista.filter(function( index ) {
    return $(this).css('color') === 'rgb(0, 0, 0)'
  });
  return listaSinRojos;
}

function aux2(lista){
  listaArray = [];
  lista.each(function( index ) {
    listaArray.push($(this).text());
  });
  return listaArray;
}


function sinRojos(partido){

  listaSinRojos = aux(partido);

  listaArray = aux2(listaSinRojos);



  listaArray.splice(partido, 1);

  return listaArray;
}



function niRojosNiElecciones(partido){
  listaSinRojos = aux(partido);

  listaArray = aux2(listaSinRojos);
  listaArray.splice(partido, 1);

	listaArray.splice(listaArray.indexOf('Elecciones'), 1);
	result = [];
	lorol = [];

	hey = [];

 	for (i = 1; i < listaArray.length+1; i++) {  
 		result.length = i; //n=2
		combine(listaArray, result.length, 0, result);
	}

	lorol.forEach(function( string ) {
		hey.push(string.split(","));
  	});

	return hey;
}

function combine(input, len, start, result, p) {
  if(len === 0) {
    lorol.push(result.join(","));
    return;
  }
  for (let i = start; i <= input.length - len; i++) {
    result[result.length - len] = input[i];
    combine(input, len-1, i+1, result);
  }
}

function listaPartido(partido){
    div = $('#listas div > [data-name="'+partido+'"]').parent();
    lista = div.children("ul").children("li");

    return lista;
}

/*

html = '<div id='+partido+'>\
  <h2 class="PartidoName editable" data-name="'+partido+'">'+partido+'</h2>\
  <ul id="sortable1" class="sec">\
  <li>\
    <ul id="sortable3" class="connectedSortable">\
      <h2 class="ui-state-disabled">seccion1</h2>\
      <li class="ui-state-default">Item 1</li>\
      <li class="ui-state-default">Item 2</li>\
      <li class="ui-state-default">Item 3</li>\
      <li class="ui-state-default">Item 4</li>\
      <li class="ui-state-default">Item 5</li>\
    </ul>\
  </li>\
  <li>\
    <ul id="sortable3" class="connectedSortable">\
      <h2 class="ui-state-disabled">seccion2</h2>\
      <li class="ui-state-default">Item 1</li>\
      <li class="ui-state-default">Item 2</li>\
      <li class="ui-state-default">Item 3</li>\
      <li class="ui-state-default">Item 4</li>\
      <li class="ui-state-default">Item 5</li>\
    </ul>\
  </li>\
  <li>\
    <ul id="sortable3" class="connectedSortable">\
      <h2 class="ui-state-disabled">seccion3</h2>\
      <li class="ui-state-default">Item 1</li>\
      <li class="ui-state-default">Item 2</li>\
      <li class="ui-state-default">Item 3</li>\
      <li class="ui-state-default">Item 4</li>\
      <li class="ui-state-default">Item 5</li>\
    </ul>\
  </li>\
  <li>\
    <ul id="sortable3" class="connectedSortable">\
      <h2 class="ui-state-disabled">seccion4</h2>\
      <li class="ui-state-default">Item 1</li>\
      <li class="ui-state-default">Item 2</li>\
      <li class="ui-state-default">Item 3</li>\
      <li class="ui-state-default">Item 4</li>\
      <li class="ui-state-default">Item 5</li>\
    </ul>\
  </li>\
  <li>\
    <ul id="sortable3" class="connectedSortable">\
      <h2 class="ui-state-disabled">seccion5</h2>\
      <li class="ui-state-default">Item 1</li>\
      <li class="ui-state-default">Item 2</li>\
      <li class="ui-state-default">Item 3</li>\
      <li class="ui-state-default">Item 4</li>\
      <li class="ui-state-default">Item 5</li>\
    </ul>\
  </li>\
</ul>\
</div>';


*/