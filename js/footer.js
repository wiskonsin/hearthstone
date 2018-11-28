(function(){

    var url = "www.sitioweb.com";
    var footer = document.getElementById("footer");
    
    var ul = document.createElement("ul");
    
    var foot1 = document.createElement("li");
    var div = document.createElement('div');

    var linkText = document.createTextNode(url);

    foot1.setAttribute("class","divfooter");

    div.appendChild(linkText);

    div.title = "Web"
    foot1.appendChild(div);
    
   
    
    ul.appendChild(foot1);
    footer.appendChild(ul);
    
    })();