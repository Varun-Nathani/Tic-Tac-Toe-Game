let boxes = document.querySelectorAll(".box")

let resetBtn = document.querySelector("#reset-btn")

let turn = "X"

let lastTurn

let winScreen = document.getElementById("winScreen")

let newBtn = document.querySelector("#new-btn")

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

resetBtn.onclick = () =>{
    for (let index = 0; index < boxes.length; index++) {
        boxes[index].textContent = null;    
    }
    turn = "X"
}

for(let i = 0; i <boxes.length; i++){
    let box = boxes[i]
    box.addEventListener("click", (evt) => {
        
        if (evt.target.textContent != "X" && evt.target.textContent != "O"){
            evt.target.textContent = turn
        }


        if (turn === "X"){
            turn = "O"
            lastTurn = "X"
        }
        else if (turn === "O"){
            turn = "X"
            lastTurn = "O"
        }

        CheckWinner()
    })
}

function CheckWinner(){
    for (pattern of winPatterns){
        let i = pattern[0];
        let j = pattern[1];
        let k = pattern[2];

        if (boxes[i].innerText != "" && boxes[j].innerText != "" && boxes[k].innerText != ""){
            if (boxes[i].innerText === boxes[j].innerText && boxes[j].innerText === boxes[k].innerText) {
                winScreen.classList.remove("hide");
                document.getElementById("msg").textContent = `Winner is ${lastTurn}`
            }
        }
    }
}

newBtn.onclick = () => {
    for (let index = 0; index < boxes.length; index++) {
        boxes[index].textContent = null;    
    }
    turn = "X"
    winScreen.classList.add("hide")
}