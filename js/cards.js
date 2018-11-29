// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

var boton = document.getElementById("boton");
var buscador = document.getElementById("buscador");

function buscar(){

    var carta = buscador.value;

    /* MASHAPE */
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

        data.forEach(function(element) {
        
            var row = document.createElement("div");
            row.setAttribute("class","row");
            var col1 = document.createElement("div");
            col1.setAttribute("class","col-sm-4 propiedades");
            var col2 = document.createElement("div");
            col2.setAttribute("class","col-sm-4 propiedades");
            var col3 = document.createElement("div");
            col3.setAttribute("class","col-sm-4 propiedades");

            var node = document.createElement("h1"); 
            node.setAttribute("class","titulocarta");

            var textnode = document.createTextNode(element.name);
            node.appendChild(textnode);

            var imagen = document.createElement("img");
            imagen.src = element.img;

            var clase = document.createTextNode(element.playerClass);
            var tipo = document.createTextNode(element.type);
            var frase = document.createTextNode(element.flavor);
            var lista1 = document.createElement("div");
            var lista2 = document.createElement("div");
            var elemento1 = document.createElement("p");
            var elemento2 = document.createElement("p");
            var elemento3 = document.createElement("p");
          
            elemento1.appendChild(clase);
            elemento2.appendChild(tipo);
            elemento3.appendChild(frase);

            lista1.appendChild(elemento1);
            lista1.insertBefore(elemento2,lista1.childNodes[0]);
            lista2.appendChild(elemento3);

            col2.appendChild(lista1);
            col1.appendChild(node);
            col1.appendChild(imagen);
            col3.appendChild(lista2);

            row.appendChild(col3);
            row.insertBefore(col2,row.childNodes[0]);
            row.insertBefore(col1,row.childNodes[0]);
            document.getElementById("resultados").appendChild(row);

            $('img').on("error", function() {
                $(this).attr('src', 'assets/images/hspng.png');
                $(this).attr('height', ' 300px');
              });
          });
  
      } 
      else {
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

      }
    }
    
    request.send();

};

boton.addEventListener("click",buscar);