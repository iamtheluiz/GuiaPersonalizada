var links = [];

/* Coloque os links no espaço abaixo conforme a estrutura*/

//Youtube
links[0] = [];
links[0]["name"] = "YouTube";
links[0]["img"] = "http://www.vectorico.com/?wpfilebase_thumbnail=1&fid=1&name=youtube-icon.png";
links[0]["link"] = "https://youtube.com/";

//Facebook
links[1] = [];
links[1]["name"] = "Facebook";
links[1]["img"] = "https://secure.webtoolhub.com/static/resources/icons/set111/75c24245.png";
links[1]["link"] = "https://facebook.com/";

//GitHub
links[2] = [];
links[2]["name"] = "GitHub";
links[2]["img"] = "https://d1qb2nb5cznatu.cloudfront.net/startups/i/60436-22967c4ce89dbdbd4a8d49b090509a78-medium_jpg.jpg?buster=1517982458";
links[2]["link"] = "https://github.com/";

//Gmail
links[3] = [];
links[3]["name"] = "Gmail";
links[3]["img"] = "https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/12/d4/ed/12d4ed02-b7ec-4612-6826-e60365b9ff13/mzl.ifkkpiqh.png/1200x630bb.jpg";
links[3]["link"] = "https://mail.google.com/";

//Whatsapp
links[4] = [];
links[4]["name"] = "Whatsapp";
links[4]["img"] = "http://icons-for-free.com/free-icons/png/512/1632535.png";
links[4]["link"] = "https://web.whatsapp.com/";

/* Coloque os links no espaço acima conforme a estrutura*/

//Implementa os links na página
var content = document.getElementById("browse-itens");

for(var c = 0; c <= links.length - 1; c++){

	var link = document.createElement("a");
	link.setAttribute("href",links[c]["link"]);
	link.setAttribute("target","_blank");

	var div = document.createElement("div");
	div.setAttribute("class","item item_col");

	var img = document.createElement("img");
	img.setAttribute("src",links[c]["img"]);

	div.appendChild(img);		//Coloca a imagem dentro da div
	link.appendChild(div);		//Coloca a div dentro do link
	content.appendChild(link);	//Coloca o link dentro do content

}