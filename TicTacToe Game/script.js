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

const aiTurn = () => {
  let availableBoxes = [];
  boxes.forEach((box, index) => {
    if (box.innerText === "") {
      availableBoxes.push(index);
    }
  });

  if (availableBoxes.length > 0) {
    let randomIndex = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
    console.log(randomIndex)
    boxes[randomIndex].innerText = "X";
    boxes[randomIndex].style.color = "red";
    boxes[randomIndex].disabled = true;
    turnO = true;
    checkwinner();
  }
};

boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.innerText = "O";
      btn.style.color = "green";
      btn.disabled = true;
      turnO = false; // means player O's turn is over, now player X's turn
      checkwinner();
      if (msg.innerText.includes("Congratulations") && msg.innerText.includes("Sorry")) {
        disablebtn();
      }else{
        aiTurn();
      }
    }
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
        disablebtn();
        showwinner(pos1val);
        winner = true;
      }
    }
  }
  if (!winner) {
    draw();
  }
};
reset.addEventListener("click", resetGame);

/*---------END----------*/
