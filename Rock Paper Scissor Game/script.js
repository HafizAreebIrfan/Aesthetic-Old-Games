/*---------START----------*/

let userscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll(".btn");
const msg = document.querySelector(".msg");
const compoption = document.querySelector(".compoption");
const userscorenum = document.querySelector(".userscore");
const compscorenum = document.querySelector(".compscore");

const winstatus = (userchoice, compchoice) => {
  if (userchoice === compchoice) {
    msg.innerText = "This was a draw!!";
    msg.style.background = "black";
    msg.style.color = "white";
    compoption.classList.remove("hide");
    compoption.innerText = `Computer choice was: ${compchoice}`;
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    if (userwin) {
      msg.innerText = "You Won This!!";
      msg.style.background = "darkgreen";
      msg.style.color = "white";
      msg.style.border = "1px solid darkgreen";
      compoption.classList.remove("hide");
      compoption.innerText = `Computer choice was: ${compchoice}`;
      userscore++;
      userscorenum.innerText = userscore;
    } else {
      msg.innerText = "You lose This!!";
      msg.style.background = "darkred";
      msg.style.color = "white";
      msg.style.border = "1px solid darkred";
      compoption.classList.remove("hide");
      compoption.innerText = `Computer choice was: ${compchoice}`;
      computerscore++;
      compscorenum.innerText = computerscore;
    }
  }
};

const computerchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playgame = (userchoice) => {
  console.log("User choice = ", userchoice);
  const compchoice = computerchoice();
  console.log("Computer choice = ", compchoice);
  winstatus(userchoice, compchoice);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

/*---------END----------*/
