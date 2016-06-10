var valeurPrec = 250;
var valeurPrecPrec = 250;

setInterval(
	function(){ 
		$.get("https://iot.seeed.cc/v1/node/GenericAInA0/analog?access_token=7c73fb1b4aa98f284dc0601a855b045c", function(data, status){
        	// alert("Data: " + data + "\nStatus: " + status);
        	var valeur = Math.round((valeurPrec + valeurPrecPrec + data.analog)/6);

        	var valeurText = valeur.toString();
			$(".volume").html(valeurText);

			var valeurPercent = valeur;
		
			$('.progress-bar').css('width', valeurPercent+'%');


			valeurPrecPrec = valeurPrec;
			valeurPrec = valeur;

    	});
			
	 }

, 100);

window.onload = function() {
			
};