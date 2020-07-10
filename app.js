var min=0;
var sec=0;
var msec=0;
var minh=document.getElementById("min");
var sech=document.getElementById("sec");
var msech=document.getElementById("msec");
var b_d=document.getElementById("dis");

var interval;
function timmer(){
    msec++;
    msech.innerHTML=msec;
    if (msec>=100){
        sec++;
        sech.innerHTML=sec;
        msec=0;
    }
    else if (sec>=60){
        min++;
        minh.innerHTML=min;
        sec=0;
    }
}

function start(){
    b_d.disabled=true;
    interval=setInterval(timmer,10);
    
}
function pause(){
    clearInterval(interval);
    b_d.disabled=false;
}
function reset(){
    minh.innerText=0;
    sech.innerText=0;
    msech.innerText=0;
    min=0;
    sec=0;
    msec=0;
    pause();
    b_d.disabled=false;
}

