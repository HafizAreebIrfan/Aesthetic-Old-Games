/*---------START----------*/

let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".resetbtn");
let row = document.querySelector(".row");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Box clicked");
    if (turnO) {
      btn.innerText = "O";
      btn.style.color = "green";
      turnO = false; //means player 0 turn is over, now player X turn
    } else {
      btn.innerText = "X";
      btn.style.color = "red";
      turnO = true; //means player x turn is over, now player o turn
    }
    btn.disabled = true;
    checkwinner();
  });
});

const resetGame = () => {
  turnO = true;
  enablebtn();
  msg.classList.add("hide");
};

const disablebtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enablebtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  msg.innerText = `Congratulation, The Winner is: ${winner}`;
  msg.classList.remove("hide");
};
const draw = () => {
    let allFilled = true;
    for (let box of boxes) {
      if (box.innerText === "") {
        allFilled = false;
        break;
      }
    }
    if (allFilled) {
      console.log("Sorry, no winner");
      msg.innerText = "Sorry, no winner";
      msg.classList.remove("hide");
    }
  };

const checkwinner = () => {
    let winner = false;
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        disablebtn();
        showwinner(pos1val);
        winner = true;
      }   
    }
  }
  if(!winner){
    draw();
}
};
reset.addEventListener("click", resetGame);

/*---------END----------*/
