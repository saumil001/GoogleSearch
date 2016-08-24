$(document).ready(function(){
	
	$("#search").click(function(){
		
		var query = document.getElementById('txtQuery').value;
		var data = {q:query}
		
		$.getJSON( "./Servlet1", data, function(response) {
			console.log(JSON.stringify(response));
			document.getElementById("results").innerHTML = "";
			 for (var i = 0; i < response.items.length; i++) {
				 	
			        var item = response.items[i];     
			        document.getElementById("results").innerHTML += "<h3>" + item.htmlTitle;
			        document.getElementById("results").innerHTML += '<a href="'+item.link+'">'+item.displayLink+'</a>';
			        document.getElementById("results").innerHTML += "<br>" + item.snippet + "<hr>";
			      }
			 });		
		});
	});