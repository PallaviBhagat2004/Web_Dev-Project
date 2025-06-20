let userSeq=[];
let gameSeq=[];
let high=0;
let color=["yellow","red","purple","green"];
let started=false;
let level=0;
let h3=document.querySelector('h3');
document.addEventListener("keypress",function(){   /// yaha pee game first start hoga 
    if(started==false)
    {
         console.log("the game is started");
         started=true;
    }
    levelup();     /// as the game level start
})
function levelup(){
    userSeq=[];
    level++;
    h3.innerHTML=`Level ${level}`;
    
    let random=Math.floor(Math.random()*3);  //index
    let rancolor=color[random];   //color
    gameSeq.push(rancolor);    // store the sequence of the game
    console.log(gameSeq);   
    let randbtn=document.querySelector(`.${rancolor}`);
    flash(randbtn);
}
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },250);
}
///we have to check they are same or not
function checkAns(indx){
    if(userSeq[indx]==gameSeq[indx])
    {
        if(userSeq.length==gameSeq.length)
        {
            levelup();
        }
    }
    else
    {
        h3.innerHTML=`Game Over!! Your Score is <b>${level} </b> <br> Press any key to start the game`;
        if(high<level)
        {
            high=level;
            alert(` Congratulations!!The highest score was ${high}`);
        }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
///user button ko press karega 
function btnpress(){
    let btn=this;

    let usercolor=this.getAttribute("id");
    userSeq.push(usercolor);  // store in the user sequence 
    userflash(btn);
    checkAns(userSeq.length-1);
}
 
let btns=document.querySelectorAll('.btn');
for(btn of btns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}
