function makeBubble(){
    let clutter=""
for(var i=1;i<=216;i++){
   let rn=Math.floor(Math.random()*10)
   clutter+=`<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}
var timer=60;
function runTimer(){
   var timerint= setInterval(function(){
        if(timer>0){     
        timer--;
         document.querySelector("#timerval").textContent=timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
            clearInterval(timerint);
        }
    },1000);
}
var score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

function decreaseScore(){
    score-=5;
    document.querySelector("#scoreval").textContent=score;
}

var hitrn;
function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=hitrn;
}
document.querySelector("#pbtm").addEventListener("click",function(details){
    var numclicked=Number(details.target.textContent);
    if(numclicked===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    else{
            decreaseScore();
            makeBubble();
            
    }
})
// increaseScore();
makeBubble();
getNewHit();
runTimer();

