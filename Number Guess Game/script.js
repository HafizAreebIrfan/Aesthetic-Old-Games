/*---------START----------*/

//numberguessinggame
let userinputval = document.querySelector(".usernum");
let userinputsubmit = document.querySelector(".submit");
let msg = document.querySelector(".msg");
let aivalue = document.querySelector(".aivalue");
let playagain = document.querySelector(".playagain");
let rstatus = document.querySelector(".status");
let userscore = 0;
let aiscore = 0;
const userscorenum = document.querySelector(".userscore");
const aiscorenum = document.querySelector(".aiscore");
const resultshow = document.querySelector(".resultshow");

const stopgame = (userscore , aiscore) => {
    if(userscore >= 10){
        userinputval.disabled = true;
        userinputsubmit.disabled = true;
        rstatus.classList.remove("hide");
        playagain.classList.remove("hide");
        resultshow.innerText = "Congrats, You beat AI";
        resultshow.style.color = "green";
    }
    else if(aiscore >=10){
        userinputval.disabled = true;
        userinputsubmit.disabled = true;
        rstatus.classList.remove("hide");
        playagain.classList.remove("hide");
        resultshow.innerText = "Oh no, AI beats You";
        resultshow.style.color = "red";
    }
}

const result = (userinput, AIChoice) => {
    if(userinput === AIChoice){
        msg.innerText = `Congrats, You guessed the correct number ${userinput}`;
        msg.style.color = "green";
        aivalue.innerText = `AI Guessed ${AIChoice}`;
        aivalue.style.color = "black";
        rstatus.classList.remove("hide");
        playagain.classList.add("hide");
        userscore++;
        userscorenum.innerText = userscore;
        stopgame(userscore,aiscore);
    }
    else{
        msg.innerText = `Oh no, You guessed the wrong number ${userinput}`;
        msg.style.color = "red";
        aivalue.innerText = `AI Guessed ${AIChoice}`;
        aivalue.style.color = "black";
        rstatus.classList.remove("hide");
        playagain.classList.add("hide");
        aiscore++;
        aiscorenum.innerText = aiscore;
        stopgame(userscore,aiscore);
    }
}

const compchoice = () => {
    const randval = Math.floor(Math.random() * 100)+1;
    return randval;
};

userinputsubmit.addEventListener("click", () => {
    let userinput = userinputval.valueAsNumber;
    if(userinput > 100 || userinput < 1){
        msg.innerText = "Enter number from 1 - 100 only";
        rstatus.classList.remove("hide");
        userinputval.value = "";
        userinputval.disabled = true;
        userinputsubmit.disabled = true;
    }
    else{
        console.log(`${userinput}`);
        const AIChoice = compchoice();
        console.log(AIChoice);
        result(userinput, AIChoice);
        userinputval.value = "";
    }
});
playagain.addEventListener("click", () => {
    userinputval.disabled = false;
    userinputsubmit.disabled = false;
    rstatus.classList.add("hide");
    userscore = 0;
    aiscore = 0;
    userscorenum.innerText = userscore;
    aiscorenum.innerText = aiscore;
});

/*---------END----------*/
