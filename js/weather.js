var callbackFunction = function(data) {
	console.log(data);
	var all = data.query.results.channel.item.description;
	all.split("");
	var complete_weather = all.slice(9,all.length - 201);
	//console.log(complete_weather);

	console.table(data.query.results.channel.item.forecast);

	//document.getElementById("weather-itens").innerHTML = complete_weather;

	//Colocando divs de clima
	document.getElementById("weather-location").innerHTML = data.query.results.channel.location.city+","+data.query.results.channel.location.region;
	document.getElementById("weather-temp").innerHTML = data.query.results.channel.item.condition.temp+" ºC";
};