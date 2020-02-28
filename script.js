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
	/*
	lista = listaPartido("Partido2");
    console.log(lista);
    gobierno("Partido2", lista)
    */
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
	listaArray.splice(listaArray.indexOf('Elecciones'), 1);
	console.log(listaArray);

 	for (i = 0; i < listaArray.length; i++) {
 		
	}

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

  nuevolp = listaArray.slice(1);
  gol = nuevolp[0];
  console.log(gol);

  cojones = [listaArray[0]];
  //cojones.pop();
  console.log(JSON.stringify(partido));

  arraytest = [];



  console.log("************");

  for (i = 0; i < cojones.length; i++) {
    resultado = cojones[i];
    console.log(JSON.stringify(cojones));
    loop(cojones, [remove(nuevolp.slice(), resultado),resultado])
  }


/*
  cojones.forEach(function( resultado ) {
    console.log(JSON.stringify(cojones));
    loop(cojones, [nuevolp.slice(resultado, 1),cojones])
  });*/
  console.log("************");
  console.log(cojones);


}


function remove(array, remove){

  listaRemove = remove.split(",");

  listaRemove.forEach(function( e ) {
    array.splice(e, 1);
  });
  return array
}


/*
	arrayGobierno = [];
	listaArray.forEach(function(element) {
		if (element != listaArray[0]){
			arrayGobierno.push(listaArray[0]+","+element);
		}else{
			arrayGobierno.push(listaArray[0]);
		}
  	});

	console.log(arrayGobierno);

  nuevolp = listaArray.slice();

  arraytest = [nuevolp[0]];
  con = nuevolp[0];
  for (i = 0; i < nuevolp.length; i++) {

    nuevolp.forEach(function(e) {
      lista1 = [con, e];
      lista2 = nuevolp.slice(e, 1);

      loop(arraytest, lista1, lista2);
    });

  }

  console.log("************");
  console.log(arraytest);
  

*/


function loop(array, listaListas){

  lel = allPossibleCombinations(listaListas);
  lel.forEach(function(element) {
    array.push(element.join());
  });
}

function kk(){

var a = [
  ["B","C","D"],
  ["B","C","D"],
  ["B","C","D"],
  ["A"],
]

console.log(allPossibleCombinations(a));
console.log(allPossibleCombinations(a).length);

}


/*

	nuevolp = listaArray.slice(1);
	console.log(nuevolp);

	
	append = listaArray[0];
  arraytest =[append]

	nop = nuevolp.slice();

	for (i = 0; i < nuevolp.length; i++) {
  		nuevolp.forEach(function(element) {
			arraytest.push(append+","+element)
  		});
  		append = append+","+nuevolp[0];
  		nuevolp.shift();
	}
  console.log("------------");
  console.log(arraytest);

/*
	arraytest =[]
	//recursive(listaArray.slice(1), arraytest);
	console.log("------------");
	*/
	


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



function allPossibleCombinations(items, isCombination=false){
    // finding all possible combinations of the last 2 items
    // remove those 2, add these combinations
    // isCombination shows if the last element is itself part of the combination series
    if(items.length == 1){
       return items[0]
    }
    else if(items.length == 2){
       var combinations = []
       for (var i=0; i<items[1].length; i++){
           for(var j=0; j<items[0].length; j++){
               if(isCombination){
                   // clone array to not modify original array
                   var combination = items[1][i].slice();
                   combination.push(items[0][j]);
               }
               else{
                   var combination = [items[1][i], items[0][j]];
               }
               combinations.push(combination);
           }
       }
       return combinations
    }
    else if(items.length > 2){
       var last2 = items.slice(-2);
       var butLast2 = items.slice(0, items.length - 2);
       last2 = allPossibleCombinations(last2, isCombination);
       butLast2.push(last2)
       var combinations = butLast2;
       return allPossibleCombinations(combinations, isCombination=true)
    }
}

