  
  (function(){


// guardo mi apikey

var data = JSON.stringify({
  "apiKey": "ng1WZMEZbnZTY79cFgzkveBU9vOLVNDoktEkrY5a7jY"
});


// Accedo para conseguir tokens (access_token y refresh_token)

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    var json = JSON.parse(this.responseText);

// ya tengo el token //

// procedo a crear un vídeo




var data = JSON.stringify({
    "title": "Trailer de no sé qué",
    "description": "Trailer de una película",
    "tags": [
      "trailer",
      "cine",
      "video"
    ],
    "metadata": [
      {
        "key": "Author",
        "value": "Luis Riancho"
      },
      {
        "key": "Format",
        "value": "Movies"
      }
    ],
    "scheduledAt": "4251-03-03T12:52:03.085Z"
  });
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);




        











    }
  });
  
  xhr.open("POST", "https://ws.api.video/videos");
  xhr.setRequestHeader("authorization", json.access_token);
  xhr.setRequestHeader("content-type", "application/json");
  
  xhr.send(data);



///////////////////


    }
});

xhr.open("POST", "https://ws.api.video/auth/api-key");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);








})()


