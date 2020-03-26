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
    if(count < 9) {
        e.target.innerHTML = `<h1>${currentPlayer}</h1>`;
        if(currentPlayer === player1) {
            e.target.childNodes[0].classList.add("gameText");
            e.target.childNodes[0].classList.add("gameText--red");
            arrBoard[parseInt(e.target.attributes[1].value, 10)] = currentPlayer;
            if(checkGame(arrBoard, currentPlayer)) {
                alert(currentPlayer + " has Won!");
                board.removeEventListener("click", playGame);
                return true;
            }
            currentPlayer = player2;
            count++;
        } else {
            e.target.childNodes[0].classList.add("gameText");
            arrBoard[parseInt(e.target.attributes[1].value, 10)] = currentPlayer;
            if(checkGame(arrBoard, currentPlayer)) {
                alert(currentPlayer + " has Won!");
                board.removeEventListener("click", playGame);
                return true;
            }
            currentPlayer = player1;
            count++;
        }
    } else {
        alert("That was a draw");
        board.removeEventListener("click", playGame);
        return;
    }

};



// Event listener
board.addEventListener("click", playGame);