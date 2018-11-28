(function(){

var menu = document.getElementById("menu");

var ul = document.createElement("ul");

var inicio = document.createElement("li");
var a = document.createElement('a');
var linkText = document.createTextNode("Inicio");
a.appendChild(linkText);
a.title = "Inicio"
a.href = "index.html"
inicio.appendChild(a);

var cards = document.createElement("li");
linkText = document.createTextNode("Cartas");


var a2 = document.createElement('a');
var cards = document.createElement("li");
linkText = document.createTextNode("Cartas");
a2.appendChild(linkText);
a2.title = "Cartas"
a2.href = "cards.html"
cards.appendChild(a2);

var a3 = document.createElement('a');
var decks = document.createElement("li");
linkText = document.createTextNode("Mazos");
a3.appendChild(linkText);
a3.title = "Mazos"
a3.href = "decks.html"
decks.appendChild(a3);

var a4 = document.createElement('a');
var forum = document.createElement("li");
linkText = document.createTextNode("Foro");
a4.appendChild(linkText);
a4.title = "Foro"
a4.href = "forum.html"
forum.appendChild(a4);

ul.appendChild(inicio);
ul.appendChild(cards);
ul.appendChild(decks);
ul.appendChild(forum);

menu.appendChild(ul);

})();