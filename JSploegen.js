
function createDiv(e){
    e.preventDefault();

    let newDiv = document.createElement("div");
    newDiv.className="divLanden";
    let img = document.createElement("img");

    img.id="imageLand";


    let source = document.getElementsByName("shortcode")[0].value;
    window.alert(source);
    let srcString = "resources/landen/"+source+".png";
    img.setAttribute("src", srcString);
    let breakrule = document.createElement("br");
    let naam = document.createElement("span");
    naam.innerText=document.getElementsByName('naam')[0].value;

    let beschrijving  = document.createElement("p");
    beschrijving.innerText= document.getElementsByName('beschrijving')[0].value
   // let landNaam = document.getElementsByName('naam')[0].value;
    //let beschrijving = document.getElementsByName('beschrijving')[0].value;
    newDiv.appendChild(img);
    newDiv.appendChild(naam);
    newDiv.appendChild(breakrule);
    newDiv.appendChild(beschrijving);
    localStorage.setItem('div',JSON.stringify(newDiv));

    document.getElementById('ploegen').appendChild(newDiv);
    $(function() {
        localStorage["myKey"] = JSON.stringify($("#divWithContents").html());
    })

    // body.appendChild(newDiv);
}
function showDivs(e){
}