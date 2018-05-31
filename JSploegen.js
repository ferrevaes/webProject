var landen = [];
function createDiv(e){
    e.preventDefault();
    let source = document.getElementsByName("shortcode")[0].value;

    let naam = "";
    naam=document.getElementsByName('naam')[0].value;

    let beschrijving  = document.createElement("p");
    beschrijving= document.getElementsByName('beschrijving')[0].value
   // let landNaam = document.getElementsByName('naam')[0].value;
    //let beschrijving = document.getElementsByName('beschrijving')[0].value;

    let landObject;

    landObject = {'shortcode': source,'landnaam':naam,'beschrijving':beschrijving};
    window.alert("completed");
    landen.push(landObject);
    localStorage.setItem("land",JSON.stringify(landen));
// body.appendChild(newDiv);
}
function showDivs(e){
    let landen = JSON.parse(localStorage.getItem("land"));
    let shortcode;
    let landnaam;
    let beschrijving;
    let srcString;

    let breakrule = document.createElement("br");


    for(let i=0;i<landen.length;i++){

        let naam = document.createElement("span");
        let img = document.createElement("img");
        let pBeschrijving = document.createElement("p");
        let newDiv = document.createElement("div");

        newDiv.className="divLanden";

        shortcode = landen[i].shortcode;
        landnaam = landen[i].landnaam;
        naam.innerText = landnaam;
        beschrijving = landen[i].beschrijving;
        pBeschrijving.innerText = beschrijving;
        srcString = "resources/landen/"+shortcode+".png";
        img.id="imageLand";
        img.setAttribute("src", srcString);
        newDiv.appendChild(img);
        newDiv.appendChild(naam);
        newDiv.appendChild(breakrule);
        newDiv.appendChild(pBeschrijving);
        document.getElementById('ploegen').appendChild(newDiv);



    }

}