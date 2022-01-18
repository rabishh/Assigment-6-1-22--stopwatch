const playButton=document.querySelector(".play");
const lapButton=document.querySelector(".lap ");
const resetButton=document.querySelector(".reset");
const second=document.querySelector(".sec");
const centiSecond=document.querySelector(".msec");
const minute=document.querySelector(".minute");
const laps=document.querySelector(".laps")
const clearButton=document.querySelector(".lap-clear-button")
const  bg=document.querySelector(".outer-circle")
let isPlay=false;
let secCounter=0;
let centiSecCounter=0;
let minuteCounter=0;
let centiSec;
let sec;
let min;
let isReset=false;
let lapitem=0;


const toggleButton=()=>{
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}
const play=()=>{
    if(!isPlay && !isReset){
        bg.classList.add("animation-bg");
        playButton.innerHTML="pause";
            min=setInterval(()=>{
                minute.innerHTML=`${++minuteCounter}:`;
            },60*1000);
            sec=setInterval(()=>{
                if(secCounter===60){
                    secCounter=0;
                }
                second.innerHTML=`&nbsp;${secCounter++}:`;
            },1000);
            centiSec=setInterval(()=>{
                if(centiSecCounter===100){
                    centiSecCounter=0;
                }
                centiSecond.innerHTML=`&nbsp;${++centiSecCounter}`;
            },10);
            isPlay=true;
            isReset=true;
    }
    else{
        playButton.innerHTML="play";
        clearInterval(sec);
        clearInterval(centiSec);
        clearInterval(min);
        bg.classList.remove("animation-bg");
        isPlay=false;
        isReset=false;
    }
    toggleButton();
}
const reset =()=>{
    isReset=true;
    play();

    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    second.innerHTML="&nbsp;0 :";
    centiSecond.innerHTML="&nbsp;0";
    minute.innerHTML="0 :";
}
const lap=()=>{
    const li=document.createElement("li");
    const number=document.createElement("span");
    const timeStamp=document.createElement("span");
    li.setAttribute("class" , "lap-item");
    number.setAttribute("class" , "number");
    timeStamp.setAttribute("class" , "time-stamp");
    number.innerText=`${++lapitem}`
    timeStamp.innerHTML=`${minuteCounter} : ${secCounter} : ${centiSecCounter}`;
    li.append(number,timeStamp);
    laps.append(li);
    clearButton.classList.remove("hidden");
}
const clearAll=()=>{
    laps.innerHTML="";
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapitem=0;
}
resetButton.addEventListener("click" ,reset)
playButton.addEventListener("click" , play);
lapButton.addEventListener("click" , lap );
clearButton.addEventListener("click" , clearAll);