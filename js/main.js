setInterval(
	function(){ 
		$.get("https://iot.seeed.cc/v1/node/GenericAInA0/analog?access_token=7c73fb1b4aa98f284dc0601a855b045c", function(data, status){
        	// alert("Data: " + data + "\nStatus: " + status);

        	var valeurText = data.analog.toString();
			$(".volume").html(valeurText);

			var valeurPercent = data.analog/500*100
		
			$('.progress-bar').css('width', valeurPercent+'%');

    	});
			
	 }

, 100);

window.onload = function() {
			
};