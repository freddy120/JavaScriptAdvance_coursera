/* 
 Matching game
 author: freddy120
 Universidad Nacional de Ingeniria -  Lima, Peru
*/
var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces() {

    for(var count = 0; count < numberOfFaces; count++){
        var img = document.createElement("img");
        img.src = "smile.png";
        var imgTop = Math.random()*401;
        imgTop = Math.floor(imgTop);
        img.style.top = imgTop + "px";
        var imgLeft = Math.random()*401;
        imgLeft = Math.floor(imgLeft);
        img.style.left = imgLeft + "px";

        theLeftSide.appendChild(img);
    }

    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);


    theLeftSide.lastChild.onclick = 
    function nextLevel(event) {
        event.stopPropagation();
        numberOfFaces += 5;

        // remove all nodes from  left and right sides 
        while(theLeftSide.firstChild)
            theLeftSide.removeChild(theLeftSide.firstChild);
        while(theRightSide.firstChild)
            theRightSide.removeChild(theRightSide.firstChild);
        
        generateFaces();
    };


    theBody.onclick = function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null; 
    };

}


window.onload = generateFaces;