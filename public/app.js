let gamelist = [];
let userlist = [];
let colors = ["green","red","blue","yellow"];
let started = false;
let level = 0;
let high = 0;


document.addEventListener("keypress",function(){
  if(started==false){
  console.log("game is started");
  started=true;
  levelup();
}
});

h3=document.querySelector('h3');

function gameflash(btn){
  setTimeout(function(){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");
    },250);
  },1000);
}
function userflash(btn){
  btn.classList.add("user");
  setTimeout(function(){
    btn.classList.remove("user");
  },250);
}

function check(idx){
  if(userlist[idx]===gamelist[idx]){
    if(userlist.length == gamelist.length){
      levelup();
    }  
  }
  else{
    h3.innerHTML = `Game Over! Your score is <b>${level-1}</b><br>Press any key to start again`;
    span.innerText = level-1;
    reset();
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
  }
}

function levelup(){
  userlist = [];
  level++;
  h3.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randcolor = colors[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gamelist.push(randcolor);
    console.log(gamelist);
    gameflash(randbtn);
  }
  
  
  function btnpress(){
    let btn = this;
    userflash(btn);
    userlist.push(btn.classList[1]);
    console.log(userlist);
    check(userlist.length-1);
  }
  
  let btns = document.querySelectorAll('.btn');
  
  for(btn of btns){
    btn.addEventListener("click",btnpress);
  }
  
  function reset(){
    started = false;
    gamelist = [];
    userlist = [];
    level = 0;
  }
  
  let span = document.querySelector('span');
  