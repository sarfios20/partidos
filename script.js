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
  		console.log(g);
  		$(document.body)[0].insertAdjacentHTML('beforeend', html);
  });
}

$(document).ready(function(){
  $(".editable").bind("dblclick", replaceHTML);
  //generate();
});

function nuevoPartido() {
  console.log("crear listas");
  console.log("añadirlas");
  console.log("reset listas anteriores");

  var count = $(".PartidoContainer").length;
  console.log(count)
  count = count + 1;
  //html = '<div class="PartidoContainer" id="Partido'+count+'">Partido'+count+'</div>';

  html = '<div class="PartidoContainer" id=Partido'+count+'>\
  <h2 class="PartidoName editable">Partido'+count+'</h2>\
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


 $(document.body)[0].insertAdjacentHTML('beforeend', html);
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
        console.log(lel);
        console.log($('[data-name="'+show+'"]'))
        $('[data-name="'+show+'"]').html(newText)
    }
);

function test(){
	lista = listaPartido("Partido2");
	console.log(lista);

	listaSinRojos = lista.filter(function( index ) {
    			return $(this).css('color') === 'rgb(0, 0, 0)'
  			});

	listaArray = [];
	listaSinRojos.each(function( index ) {
    	listaArray.push($(this).text());
  	});
/*
  	console.log(listaArray);

  	index = listaArray.indexOf("Elecciones");
	console.log(index);

	listanombresGob = listaArray.slice(0, index);
	listaGob = listaSinRojos.slice(0, index);
	console.log(listaGob);
	console.log("************");
	console.log(listanombresGob);

*/
	p = listaArray.splice(0, 1);
	listaArray.splice(listaArray.indexOf('Elecciones'), 1);
	console.log(listaArray);
	result = [];
	lorol = [];

 	for (i = 1; i < listaArray.length+1; i++) {  
 		result.length = i; //n=2
		combine( listaArray, result.length, 0, result);
	}
	console.log(lorol);
}

function combine(input, len, start, result) {
  if(len === 0) {
    lorol.push("Partido2,".concat(result.join(",")));
    return;
  }
  for (let i = start; i <= input.length - len; i++) {
    result[result.length - len] = input[i];
    combine(input, len-1, i+1, result);
  }
}

function listaPartido(partido){
    div = $('div > [data-name="'+partido+'"]').parent();
    lista = div.children("ul").children("li");

    return lista;
}