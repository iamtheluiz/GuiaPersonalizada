var callbackFunction = function(data) {
	console.log(data);

	var temp_min = parseFloat(data.query.results.channel.item.forecast[0].low);
	var temp_max = parseFloat(data.query.results.channel.item.forecast[0].high);
	var temp_media = (temp_min+temp_max)/2;
	var clima = data.query.results.channel.item.forecast[0].code;
	var clima_icon = "cloud";
	var clima_name = "";

	//Colocando divs de clima
	document.getElementById("weather-location").innerHTML = data.query.results.channel.location.city+","+data.query.results.channel.location.region;
	document.getElementById("weather-temp").innerHTML = temp_media+" ºC";

	//Mudança do icone
	switch(clima){
		case "0": //Tornado
			clima_icon = "wi-tornado";
			clima_name = "Tornado";
			break;

		case "1": //Tropical Storm
			clima_icon = "wi-hurricane";
			clima_name = "Tropical Storm";
			break;

		case "2": //Hurricane
			clima_icon = "wi-hurricane";
			clima_name = "Hurricane";
			break;

		case "3": //Severe Thunderstorms
			clima_icon = "wi-thunderstorm";
			clima_name = "Severe Thunderstorms";
			break;

		case "4": //Thunderstorms
			clima_icon = "wi-thunderstorm";
			clima_name = "Thunderstorms";
			break;

		case "5": //Mixed rain and snow
			clima_icon = "wi-rain-mix";
			clima_name = "Mixed rain and snow";
			break;

		case "6": //Mixed rain and sleet
			clima_icon = "wi-sleet";
			clima_name = "Mixed rain and sleet";
			break;

		case "7": //Mixed snow and snow
			clima_icon = "wi-sleet";
			clima_name = "Mixed snow and sleet";
			break;

		case "8": //Freezing Drizzle
			clima_icon = "wi-sprinkle";
			clima_name = "Freezing Drizzle";
			break;

		case "9": //Drizzle
			clima_icon = "wi-sprinkle";
			clima_name = "Drizzle";
			break;

		case "10": //Freezing Rain
			clima_icon = "wi-rain-mix";
			clima_name = "Freezing Rain";
			break;

		case "11": //Showers
			clima_icon = "wi-showers";
			clima_name = "Showers";
			break;

		case "12": //Showers
			clima_icon = "wi-showers";
			clima_name = "Showers";
			break;

		case "13": //Snow Flurries
			clima_icon = "wi-showers";
			clima_name = "Snow Flurries";
			break;

		case "14": //Light Snow Showers
			clima_icon = "wi-snow";
			clima_name = "Light Snow Showers";
			break;

		case "15": //Blowing Snow
			clima_icon = "wi-snow-wind";
			clima_name = "Blowing Snow";
			break;

		case "16": //Snow
			clima_icon = "wi-snow";
			clima_name = "Snow";
			break;

		case "17": //Hail
			clima_icon = "wi-hail";
			clima_name = "Hail";
			break;

		case "18": //Sleet
			clima_icon = "wi-sleet";
			clima_name = "Sleet";
			break;

		case "19": //Dust
			clima_icon = "wi-dust";
			clima_name = "Dust";
			break;

		case "20": //Foggy
			clima_icon = "wi-fog";
			clima_name = "Foggy";
			break;

		case "21": //Haze
			clima_icon = "wi-fog";
			clima_name = "Haze";
			break;

		case "22": //Smoky
			clima_icon = "wi-smoke";
			clima_name = "Smoky";
			break;

		case "23": //Blustery
			clima_icon = "wi-strong-wind";
			clima_name = "Blustery";
			break;

		case "24": //Windy
			clima_icon = "wi-windy";
			clima_name = "Windy";
			break;

		case "25": //Cold
			clima_icon = "wi-snowflake-cold";
			clima_name = "Cold";
			break;

		case "26": //Cloudy
			clima_icon = "wi-cloudy";
			clima_name = "Cloudy";
			break;

		case "27": //Mostly Cloudy (night)
			clima_icon = "wi-night-alt-cloudy";
			clima_name = "Mostly Cloudy";
			break;

		case "28": //Mostly Cloudy (day)
			clima_icon = "wi-day-cloudy";
			clima_name = "Mostly Cloudy";
			break;

		case "29": //Partly Cloudy (night)
			clima_icon = "wi-night-partly-cloudy";
			clima_name = "Partly Cloudy";
			break;

		case "30": //Partly Cloudy (day)
			clima_icon = "wi-day-sunny-ovescast";
			clima_name = "Partly Cloudy";
			break;

		case "31": //Clear (night)
			clima_icon = "wi-night-clear";
			clima_name = "Clear";
			break;

		case "32": //Sunny
			clima_icon = "wi-day-sunny";
			clima_name = "Sunny";
			break;

		case "33": //Fair (night)
			clima_icon = "wi-day-cloudy-high";
			clima_name = "Fair";
			break;

		case "34": //Fair (day)
			clima_icon = "wi-night-alt-cloudy-high";
			clima_name = "Fair";
			break;

		case "35": //Mixed Rain and Hail
			clima_icon = "wi-rain-mix";
			clima_name = "Mixed Rain and Hail";
			break;

		case "36": //Hot
			clima_icon = "wi-hot";
			clima_name = "Hot";
			break;

		case "37": //Isolated Thunderstorms
			clima_icon = "wi-thunderstorm";
			clima_name = "Isolated Thunderstorms";
			break;

		case "38": //Scattered Thunderstorms
			clima_icon = "wi-thunderstorm";
			clima_name = "Scattered Thunderstorms";
			break;

		case "39": //Scattered Thunderstorms
			clima_icon = "wi-thunderstorm";
			clima_name = "Scattered Thunderstorms";
			break;

		case "40": //Scattered Showers
			clima_icon = "wi-showers";
			clima_name = "Scattered Showers";
			break;

		case "41": //Heavy Snow
			clima_icon = "wi-snowflake-cold";
			clima_name = "Heavy Snow";
			break;

		case "42": //Scattered Snow Showers
			clima_icon = "wi-snow";
			clima_name = "Scattered Snow Showers";
			break;

		case "43": //Heavy Snow
			clima_icon = "wi-snowflake-cold";
			clima_name = "Heavy Snow";
			break;

		case "44": //Partly Cloudy
			clima_icon = "wi-cloudy";
			clima_name = "Partly Cloudy";
			break;

		case "45": //Thundershowers
			clima_icon = "wi-thunderstorm";
			clima_name = "Thundershowers";
			break;

		case "46": //Snow Showers
			clima_icon = "wi-snow-wind";
			clima_name = "Snow Showers";
			break;

		case "47": //Isolated Thundershowers
			clima_icon = "wi-thunderstorm";
			clima_name = "Isolated Thundershowers";
			break;

		case "3200":
			clima_icon = "wi-na";
			clima_name = "Ñot Avaiable";
			break;

		default:
			clima_icon = "wi-day-sunny";
			clima_name = "Padrão";
			break;

	}

	document.getElementById("weather-icon").setAttribute("class","wi "+clima_icon);
	document.getElementById("weather-name").innerHTML = clima_name;

};