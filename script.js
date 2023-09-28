let gameseq=[];
let userseq=[];

let colors=['yellow','red','green','blue'];

let start=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(start==false){
        // console.log("game start");
        start==true;
    }
    levelss();
});

// **** TO START THE GAME OR FLASH RANDOMLY TO START THE GAME

function flash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },300)
}

// ***** WHEN USER CLICK THE BUTTON THEN BUTTON GOT FLASH

function userflash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },300)
}

// ***** FUNCTION FOR CHECKING THE  OF USERSEQUENCE AND GAMESEQUENCE

function check(idx){
    if(userseq[idx]===gameseq[idx]){         //** COLOR ARE SAME
        if(userseq.length==gameseq.length){  //*** LENGTH ARE SAME */
            setTimeout(levelss,1000);        // ** GENERATE RANDOM FLASH AFTER 1 SECOND
        }
    }
    else{
        h2.innerHTML=`Game over! <b>Your Score Was ${level}</b> <br> press any key to continue`;
        document.body.style.backgroundColor="red";
        setTimeout(function(){
            document.body.style.backgroundColor="white";
        },100)
        reset();
    }
}

// ********* INCREASE THE LEVEL AND GENERATE RANDOM POSITION 

function levelss(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let random=Math.floor(Math.random()*4);
    let randombtn=colors[random];
    let randoms= document.querySelector(`.${randombtn}`);
    gameseq.push(randombtn);
    console.log(gameseq);
    flash(randoms);
}

// ********** FUNCTION :- WHAT HAPPENS AFTER CLICKING AN BUTTON

function btnpress(){
    console.log(this);
    let btn=this;

    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length-1);
}

// ***** AAD EVENTLISTNER FOR ALL THE BUTTONS

let allbtns=document.querySelectorAll(".btn");
for(btns of allbtns){
    btns.addEventListener('click',btnpress);
}

// ******** TO RESET THE GAME**********

function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;

   }