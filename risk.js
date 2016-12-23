for (var i = 0; i < 100; i++) {
	var elt = document.getElementById("button");
	var cln = elt.cloneNode(true);
	cln.id = "button" + i;
	document.getElementById("helllo").appendChild(cln);
}
console.log(localStorage.clickCount);
var whosTurn = 0;
var moveFrom;
var findPlayerColor = function(player)	{
	switch(player)	{
		case "player0":
			return "black";
			break;
		case "player1":
			return "blue";
			break;
		case "player2":
			return "green";
			break;
		case "player3":
			return "yellow";
			break;
		case "player4":
			return "orange";
			break;
		case "player5":
			return "violet";
			break;
		default:
			console.log("error");
			break;
	}
}
var play = function()	{
	var playerNum = document.getElementById("playerNum").value;
	console.log(playerNum);
	if (playerNum === "2" || playerNum === "3" || playerNum === "4" || playerNum === "5" || playerNum === "6") {
		for (var i = 0; i < arrCountriesDiv.length; i++) {
			document.getElementById(arrCountries[i]).style.display = 'inline-block';	
			document.getElementById('playDiv').style.display = 'none';
		};
		// Claims all countries
		var countRandom = 0;
		var check = true;
		var arrRand = [];
		var rand;
		var playerCounter = 1;
		var countryCounter = 0;
		for (var l = 0; l < 42; l++) {
			for (var i = 0; i < playerNum; i++) {
				arrRand.push(i);
			};
		};
		for (var i = 0; i < arrCountriesDiv.length; i++) {
			arrCountriesDiv[i].style.backgroundColor = findPlayerColor("player" + arrRand[i]);
			c[arrCountries[i]].power = "player" + arrRand[i];
		};
		document.getElementById("phase").innerHTML = "Combat move";
		document.getElementById("instruct").innerHTML = "Choose the country you want to move from";
		
		for (var i = 0; i < arrCountries.length; i++) {
			if(c[arrCountries[i]].power = "player" + whosTurn)	{
				arrCountriesDiv[i].setAttribute("onclick", "javascript: combatMove(event);");
			};
		};
	}	else 	{
		alert("That isn't a valid player number.  Pick a number from 2-6.");
	};
	console.log(c);
};
var combatMove = function(event)	{
	document.getElementById("instruct").innerHTML = "Click on the country that you want to move to";
	moveFrom = event.target.id;

}
console.log("Hello World");
// Creates an array which includes all countries' divs
var arrCountriesDiv = [];
var c = {hello: true};
c.alaska = {continent: "northAmerica", power: null, adjacent: ['kamchatka', 'northwestTerritories', 'alberta']};
c.northwestTerritories = {continent: "northAmerica", power: null, adjacent: ['greenland','ontario','alberta','alaska']};
c.greenland = {continent: "northAmerica", power: null, adjacent: ['iceland','easternCanada','ontario','northwestTerritories']};
c.alberta = {continent: "northAmerica", power: null, adjacent: ['alaska', 'northwestTerritories', 'ontario', 'westernUnitedStates']};
c.ontario = {continent: "northAmerica", power: null, adjacent: ['easternCanada', 'easternUnitedStates', 'westernUnitedStates', 'alberta', 'northwestTerritories']};
c.easternCanada = {continent: "northAmerica", power: null, adjacent: ['greenland', 'easternUnitedStates', 'westernUnitedStates', 'ontario']};
c.westernUnitedStates = {continent: "northAmerica", power: null, adjacent: ['easternUnitedStates', 'centralAmerica', 'alberta', 'ontario']};
c.easternUnitedStates = {continent: "northAmerica", power: null, adjacent: ['westernUnitedStates', 'ontario', 'easternCanada', 'centralAmerica']};
c.centralAmerica = {continent: "northAmerica", power: null, adjacent: ['westernUnitedStates', 'easternUnitedStates', 'venezuela']};
c.venezuela = {continent: "southAmerica", power: null, adjacent: ['centralAmerica', 'brazil', 'peru']};
c.peru = {continent: "southAmerica", power: null, adjacent: ['venezuela', 'brazil', 'argentina']};
c.brazil = {continent: "southAmerica", power: null, adjacent: ['venezuela', 'peru', 'argentina', 'northAfrica']};
c.argentina = {continent: "southAmerica", power: null, adjacent: ['brazil', 'peru']};
c.iceland = {continent: "europe", power: null, adjacent: ['greenland', 'scandinavia', 'greatBritain']};
c.scandinavia = {continent: "europe", power: null, adjacent: ['iceland', 'russia', 'northernEurope', 'greatBritain']};
c.russia = {continent: "europe", power: null, adjacent: ['ural', 'afganistan', 'middleEast', 'southernEurope', 'northernEurope', 'scandinavia']};
c.southernEurope = {continent: "europe", power: null, adjacent: ['westernEurope', "northernEurope", "russia", "middleEast", "egypt", "northAfrica"]};
c.northernEurope = {continent: "europe", power: null, adjacent: ["scandinavia", 'russia', 'russia', 'southernEurope', 'westernEurope', 'greatBritain']};
c.greatBritain = {continent: "europe", power: null, adjacent: ['iceland', 'scandinavia', 'northernEurope', 'westernEurope']};
c.westernEurope = {continent: "europe", power: null, adjacent: ['greatBritain', 'northernEurope', 'russia']};
c.northAfrica = {continent: "africa", power: null, adjacent: ['brazil', 'westernEurope', 'southernEurope', 'egypt', 'eastAfrica', 'centralAfrica']};
c.egypt = {continent: "africa", power: null, adjacent: ['northAfrica', 'southernEurope', 'middleEast', 'eastAfrica']};
c.eastAfrica = {continent: "africa", power: null, adjacent: ['egypt', 'middleEast', 'madgascar', 'southAfrica', 'centralAfrica', 'northAfrica']};
c.centralAfrica = {continent: "africa", power: null, adjacent: ['northAfrica', 'eastAfrica', 'southAfrica']};
c.southAfrica = {continent: "africa", power: null, adjacent: ['centralAfrica', 'eastAfrica', 'madgascar']};
c.madgascar = {continent: "africa", power: null, adjacent: ['southAfrica', 'eastAfrica']};
c.middleEast = {continent: "asia", power: null, adjacent: ['eastAfrica', 'egypt', 'southernEurope', 'russia', 'afganistan', 'india']};
c.afganistan = {continent: "asia", power: null, adjacent: ['russia', 'ural', 'china', 'india', 'middleEast']};
c.india = {continent: "asia", power: null};
c.southeastAsia = {continent: "asia", power: null};
c.china = {continent: "asia", power: null};
c.mongolia = {continent: "asia", power: null};
c.siberia = {continent: "asia", power: null};
c.ural = {continent: "asia", power: null};
c.irkutsk = {continent: "asia", power: null};
c.yakutsk = {continent: "asia", power: null};
c.kamchatka = {continent: "asia", power: null};
c.japan = {continent: "asia", power: null};
c.indonesia = {continent: "australia", power: null};
c.newGuinea = {continent: "australia", power: null};
c.westernAustralia = {continent: "australia", power: null};
c.easternAustralia = {continent: "australia", power: null};
for (var i = 0; i < document.getElementsByClassName("northAmerica").length; i++) {
	arrCountriesDiv.push(document.getElementsByClassName("northAmerica")[i]);
}
for (var i = 0; i < document.getElementsByClassName("southAmerica").length; i++) {
	arrCountriesDiv.push(document.getElementsByClassName("southAmerica")[i]);
};
for (var i = 0; i < document.getElementsByClassName("europe").length; i++) {
	arrCountriesDiv.push(document.getElementsByClassName("europe")[i]);
};
for (var i = 0; i < document.getElementsByClassName("africa").length; i++) {
	arrCountriesDiv.push(document.getElementsByClassName("africa")[i]);
};
for (var i = 0; i < document.getElementsByClassName("asia").length; i++) {
	arrCountriesDiv.push(document.getElementsByClassName("asia")[i]);
};
for (var i = 0; i < document.getElementsByClassName("australia").length; i++) {
	arrCountriesDiv.push(document.getElementsByClassName("australia")[i]);
};
var arrCountries = [];
for (var i = 0; i < document.getElementsByClassName("northAmerica").length; i++) {
	arrCountries.push(document.getElementsByClassName("northAmerica")[i].id);
};
for (var i = 0; i < document.getElementsByClassName("southAmerica").length; i++) {
	arrCountries.push(document.getElementsByClassName("southAmerica")[i].id);
};
for (var i = 0; i < document.getElementsByClassName("europe").length; i++) {
	arrCountries.push(document.getElementsByClassName("europe")[i].id);
};
for (var i = 0; i < document.getElementsByClassName("africa").length; i++) {
	arrCountries.push(document.getElementsByClassName("africa")[i].id);
};
for (var i = 0; i < document.getElementsByClassName("asia").length; i++) {
	arrCountries.push(document.getElementsByClassName("asia")[i].id);
};
for (var i = 0; i < document.getElementsByClassName("australia").length; i++) {
	arrCountries.push(document.getElementsByClassName("australia")[i].id);
};
