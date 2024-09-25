
let gameseq = [];
let userseq = [];

let btns = ["red","yellow","green","blue"];
let started= false;

let level=0;
let  h3=document.querySelector("h3");

document.addEventListener("keypress",function () {
  
  if(started==false){
    console.log("game started");
   started=true;
  
  levelup();
  }
});

function gameflash(btn){
    btn.classList.add("flash");
   
    setTimeout(function()  {
        btn.classList.remove("flash");
    },250);
 }

function userflash(btn){
        btn.classList.add("user");
        
        setTimeout(function()  {
            btn.classList.remove("user");
        },250);
            
}

function levelup(){ 
level++;
h3.innerText =`Level ${level}`;
let randidx=Math.floor(Math.random()*3);
let randcolor=btns[randidx];
let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);
gameflash(randbtn);
}

function checkans(idx){
     console.log("curr level:",level); 
     
    if (userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.lenght) {
         setTimeout(levelup(),1000);
        }

    } else {
        h3.innerHTML=`game over! your score was <b> ${level}</b> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
       reset();
    }
}

function btnpress(){
    let btn=this;
     userflash(btn);

     usercolor = btn.getAttribute("id");
     
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length - 1);
}

let allbtns= document.querySelectorAll(".btn");
for( btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

