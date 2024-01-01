let buttons = document.querySelectorAll(".button");
let newgame = document.querySelector(".newgame");
let reset = document.querySelector(".resetgame");
let msgContainer = document.querySelector('.msg-container');
let msg =document.querySelector(".msg");

let turn0 = true; //playerO
const wins = [
  //array of array's.Winning patterns
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame = ()=> {
    turn0=true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("clicked");
    if (turn0) {
      button.innerText = "O";
      button.style.color="rgb(220, 7, 50)"
      turn0 = false;
    } else {
      button.innerText = "X";
      button.style.color="rgb(29, 6, 162)"
      turn0 = true;
    }
    button.disabled=true;
    checkWinner();
  });
});


const disabledBoxes = ()=>{
    for (let button of buttons) {
        button.disabled = true;
    }
}
const enableBoxes = ()=>{
    for (let button of buttons) {
        button.disabled = false;
        button.innerText='';
    }
}
const showWinner = (winner)=>{
    msg.innerText = `🥳Player "${winner}" won the game!`;
    msgContainer.classList.remove('hide');
}

const checkWinner = ()=>{
 for (let win of wins) {
    let pos1Val = buttons[win[0]].innerText;
    let pos2Val = buttons[win[1]].innerText;
    let pos3Val = buttons[win[2]].innerText;
 
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log('winner !')
            disabledBoxes();
            showWinner(pos1Val);
        }
    }
 }
};

newgame.addEventListener('click',resetgame);
reset.addEventListener('click',resetgame);
