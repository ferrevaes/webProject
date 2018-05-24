
function createDiv(){
    window.alert("blabla");
    let newDiv = document.createElement("div");
    newDiv.id = "divLand";
    newDiv.style.width="300px";
    newDiv.style.width="50px";
    newDiv.style.border="1px";
    newDiv.style.borderStyle="solid";
    newDiv.style.backgroundColor="black";
    let img = document.createElement("img");
    img.id="imageLand";
    let source = document.getElementById('shortcode');
    img.setAttribute("src", "/resources/landen/"+source+".png");
    let landNaam = document.getElementById('naam');
    let beschrijving = document.getElementById('beschrijving');
    window.alert("test");
    document.getElementById('ploegen').appendChild(landNaam);
    window.alert("dingding")
   // body.appendChild(newDiv);



}