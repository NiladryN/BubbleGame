function bubbleCreate(){
var bubb = "";
for(var i = 1; i <= 102; i++)
{
    var n = Math.floor(Math.random()*10); /*
    math.random generates random no.s between 0 and 1 i.e 0.125,0.364 etc
    so we multiply it w 10 and to remove the digits after point we use math.floor*/ 
    bubb += `<div class="bubble">${n}</div>`;
}
document.querySelector("#panelBottom").innerHTML=bubb;
}
var timer=30
function runTimer(){
    var timerInt=setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#time").textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#panelBottom").innerHTML=`<h1>  GAME OVER </h1>`
        }
    },1000)
}
var num;
function hitNew(){
    num=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=num;
}
var score= 0;
function scoreCal(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}
document.querySelector("#panelBottom").addEventListener("click",function(a){
    var currBubb= Number(a.target.textContent);//Number is used to convert string to int 
    //target only identifies the entire div so textContent is used to get just the content
    if(currBubb===num)//rn is the hit no. right now
    {
        scoreCal();
        hitNew();
        bubbleCreate();
    }
});

hitNew();
runTimer();
bubbleCreate();