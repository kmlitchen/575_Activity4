
// activity 4 debug script test

window.onload = debugAjax();

////

function debugAjax(){
	
	fetch("data/MegaCities.geojson")
		.then(function(response){
            return response.json();
        })
		.then(debugCallback)
};

function debugCallback(response){
	var myData = response
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
};
