let hitCount = 0;
let isGame = false;
let speed = 1000;

function startGame() {
    let val = prompt("Choose your speed!</br> normal </br>moderate</br>high");
    if (val == "normal") {
        speed = 2000;
    } else if (val == "moderate") {
        speed = 1000;
     }
    
    isGame = true;
    let img = document.getElementById("Mosquito");
   let  hitMos= 
        setInterval(() => { 
            
    let i = Math.floor(Math.random() * 500) + 1;
    let j = Math.floor(Math.random() * 500) + 1;
    img.style.left = i+"px";
    img.style.top = j+"px";
        }, speed);

    
    setTimeout(() => {
        clearTimeout(hitMos);
        document.write("<h3>Game Over! "+ "</br> Final Score is : "+hitCount+"</h3>");


    }, 30000);
}
function hitMosq() { //console.log(hitCount);
    if (isGame) {
        hitCount++;
        if (hitCount >= 5) { console.log("You scored Highest!"); }
    let tHit = document.getElementById("totalHit");
    tHit.innerText = hitCount;
    }
    
}
function res() {
    document.write("Sorry Game Over!");
}