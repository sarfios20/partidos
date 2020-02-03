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
	//var d1 = document.getElementById('one');
	//d1.insertAdjacentHTML('beforeend', '<div id="two">two</div>');

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
    gobierno("Partido2", lista)
}

function listaPartido(partido){
	//lista = $('li[style=color:red]');
    div = $('div > [data-name="'+partido+'"]').parent();

    lista = div.children("ul").children("li");

    return lista;
    
    
}

function gobierno(partido, lista){
	listaSinRojos = lista.filter(function( index ) {
    			return $(this).css('color') === 'rgb(0, 0, 0)'
  			});
	listaArray = [];
	listaSinRojos.each(function( index ) {
    	listaArray.push($(this).text());
  	});
  	var listaArray = listaArray.filter(function(e) { return e !== 'Elecciones' })

	console.log(listaArray);

	arrayGobierno = [];
	listaArray.forEach(function(element) {
		if (element != listaArray[0]){
			arrayGobierno.push(listaArray[0]+","+element);
		}else{
			arrayGobierno.push(listaArray[0]);
		}
  	});

	console.log(arrayGobierno);

/*
	nuevolp = listaArray.slice(1);
	console.log(nuevolp);

	arraytest =[]
	append = listaArray[0];

	nop = nuevolp.slice();

	for (i = 0; i < nuevolp.length; i++) {
  		nuevolp.forEach(function(element) {
			arraytest.push(append+","+element)
  		});
  		append = append+","+nuevolp[0];
  		nuevolp.shift();
	}
*/
	arraytest =[]
	recursive(listaArray.slice(1), arraytest);
	console.log("------------");
	console.log(arraytest);
	



}

function recursive(array, gobierno){
//ESTO MEJOR EN PYTHON
	if (array.length == 1){
		return array[0];
	}

	p = array[0];
  	array.forEach(function(element) {
  		const index = array.indexOf(element);
		if (index > -1) {
  			array.splice(index, 1);
		}
		append = recursive(array.slice());
		gobierno.push(p+","+element)
  	});

}

function glob(partido, lista){
	listaSinRojos = lista.filter(function( index ) {
    			return $(this).css('color') === 'rgb(0, 0, 0)'
  			});
	listaArray = [];
	listaSinRojos.each(function( index ) {
    	listaArray.push($(this).text());
  	});

	console.log(listaArray);
	slice = listaArray.indexOf("Elecciones");
	listaAmigos = listaArray.slice(0, slice);
	console.log(listaAmigos);
}