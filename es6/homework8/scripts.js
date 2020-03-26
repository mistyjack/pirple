/*
 Keeping up with javascript assignment 8
 Contains a tic tac toe game
*/

const player1 = "X";
const player2 = "O";
let count = 0;

let currentPlayer = player1;

const board = document.getElementById("wrapper");

const arrBoard = ["", "", "", "", "", "", "", "", ""]; // Representing the board in terms of array

// A function that check triple equality
const checkTripleEquals = (a, b, c, player) => {
    return a === player && a === b && b === c ? true : false;
};

// A function that checks if a player has won;bd is the current board and player is current player
const checkGame = (bd, player) => {
    if(checkTripleEquals(bd[0], bd[4], bd[8], player)) {
        return true;
    } else if (checkTripleEquals(bd[2], bd[4], bd[6], player)) {
        return true;
    } else if (checkTripleEquals(bd[0], bd[1], bd[2], player)) {
        return true;
    } else if (checkTripleEquals(bd[3], bd[4], bd[5], player)) {
        return true;
    } else if (checkTripleEquals(bd[6], bd[7], bd[8], player)) {
        return true;
    } else if (checkTripleEquals(bd[0], bd[3], bd[6], player)) {
        return true;
    } else if (checkTripleEquals(bd[1], bd[4], bd[7], player)) {
        return true;
    } else if (checkTripleEquals(bd[2], bd[5], bd[8], player)) {
        return true;
    } else {
        return false;
    }
};

// The main function
const playGame = (e) => {

    while(count < 9) {
        if(e.target.childNodes.length === 0) {
            e.target.innerHTML = `<h1>${currentPlayer}</h1>`;
            arrBoard[parseInt(e.target.attributes.id.value, 10)] = currentPlayer;
            count++;
            
            if(currentPlayer === player1) {
                e.target.childNodes[0].classList.add("gameText");
                e.target.childNodes[0].classList.add("gameText--red");
                if(checkGame(arrBoard, currentPlayer)) {
                    alert(currentPlayer + " has Won!");
                    board.removeEventListener("click", playGame);
                    return true;
                }
                currentPlayer = player2;
            } else {
                e.target.childNodes[0].classList.add("gameText");
                if(checkGame(arrBoard, currentPlayer)) {
                    alert(currentPlayer + " has Won!");
                    board.removeEventListener("click", playGame);
                    return true;
                }
                currentPlayer = player1;
            }
            
        } else {
            return;
        }
    }
    alert("Cats game!");
    board.removeEventListener("click", playGame);

};



// Event listener
board.addEventListener("click", playGame);