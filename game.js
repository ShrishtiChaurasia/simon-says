let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "green", "blue"];

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 1000);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 1000);
}

function levelUp() {
  userSeq = [];
  level++;
  document.querySelector("h2").innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randClr = btns[randIdx];
  let randBtn = document.querySelector(`.${randClr}`);
  gameSeq.push(randClr);
  console.log(gameSeq);
  btnFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    document.querySelector(
      "h2"
    ).innerHTML = `game over! your score is <b>${level}</b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  usercolor = btn.getAttribute("id");
  userSeq.push(usercolor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btns");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
