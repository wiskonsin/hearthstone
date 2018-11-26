// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

var boton = document.getElementById("boton");
var buscador = document.getElementById("buscador");

function buscar(){

    var carta = buscador.value;

    console.log(carta);
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/'+carta+'?locale=esES', true);
    
    request.setRequestHeader('X-Mashape-Key', 'YWEsPnTOsJmshnwVQi4xD7G3gxKip13kLdjjsn2UZ6ccXdGQft');
    
    request.onload = function () {
    // Begin accessing JSON data here
      var data = JSON.parse(this.response);
    
      if (request.status >= 200 && request.status < 400) {

        while (document.getElementById("resultados").firstChild) {
            document.getElementById("resultados").removeChild(document.getElementById("resultados").firstChild);
        }
        console.log(data);
        data.forEach(function(element) {

          
            var node = document.createElement("p"); 
            var textnode = document.createTextNode(element.name);
            node.appendChild(textnode);
            var imagen = document.createElement("img");
            imagen.src = element.img;
            if (imagen.onerror){
                imagen.src = "https://im.ziffdavisinternational.com/ign_ap/screenshot/t/the-best-and-worst-hearthstone-legendary-cards/the-best-and-worst-hearthstone-legendary-cards_gzg1.png";
                console.log("error");
            }
            document.getElementById("resultados").appendChild(node);
            document.getElementById("resultados").appendChild(imagen);

          });
         // console.log(data);
         
      } else {
        console.log('error');
      }
    }
    
    request.send();

};

boton.addEventListener("click",buscar);