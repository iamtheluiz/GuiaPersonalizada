//Variáveis Gerais
var nome = "Luiz";
var date_div = document.getElementById("time-date");
var display_div = document.getElementById("time-display");
var text_div = document.getElementById("time-text");

function atualizar_informacao(){
	var data = new Date();
	var dias = new Array(
		'Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'
	);
	var meses = new Array(
		'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
	);
	var dia = data.getDate();
	var mes = meses[data.getMonth()];
	var ano = data.getFullYear();

	var hora = 0;var minuto = 0; var segundo = 0;

	//Tratamento dos zeros
	if(data.getHours() < 10){
		time_hora = "0"+data.getHours();
	}else{
		time_hora = data.getHours();
	}

	if(data.getMinutes() < 10){
		time_minutos = "0"+data.getMinutes();
	}else{
		time_minutos = data.getMinutes();
	}

	if(data.getSeconds() < 10){
		time_segundos = "0"+data.getSeconds();
	}else{
		time_segundos = data.getSeconds();
	}

	var hora = time_hora+":"+time_minutos+":"+time_segundos;
	var dia_semana = dias[data.getDay()];
	var text = '';
	var ho = data.getHours();

	//Verifica o turno do dia
	if(data.getHours() < 6){
		text = "Boa Madrugada "+nome+"!";
	}else if(data.getHours() < 12){
		text = "Bom Dia "+nome+"!";
	}else if(data.getHours() < 18){
		text = "Boa Tarde "+nome+"!";
	}else if(data.getHours() < 24){
		text = "Boa Noite "+nome+"!";
	}

	//Escreve na página
	date_div.innerHTML = dia_semana+", "+dia+" de "+mes+" de "+ano;
	display_div.innerHTML = hora;
	text_div.innerHTML = text;
}

atualizar_informacao();

//Intervalo da atualização
setInterval(atualizar_informacao,1000);