function getTurns(){
    temp = document.getElementById("gameBoard").getAttribute("turns");
    var turns = [];
    for(i = 0; i < temp.length; i++){
        if (i%2 === 0){
            turns.push(temp[i])
        }
    }
    return turns
}

function setOnClick(){
    var tics = document.getElementsByClassName("tic");
    for(i = 0; i < tics.length; i++){
        tics[i].addEventListener('click', function(){
            var slot = this.id;
            var count = Number(document.getElementById("gameBoard").getAttribute("count"));
            var turns = getTurns();
            playerTurn(slot, count, turns);
        }) 
    }
}

function computersTurn(turns, count, computerTurn){
    var taken = false;
    while (taken === false && count !== 5){
        var computerMove = (Math.random() * 8).toFixed();
        var move = document.getElementById(`${computerMove}`).innerHTML;
        if (move === "#") {
            document.getElementById(`${computerMove}`).innerHTML = computerTurn;
            taken = true;
            turns[computerMove] = computerTurn;
            return computerMove;
        }
    }
}

function reset(){
    board = document.getElementById("gameBoard")
    var turns = ["#","#","#","#","#","#","+","#"];
    board.setAttribute("turns", turns);
    board.setAttribute("count", 0);
    var tics = document.getElementsByClassName("tic");
    for(i = 0; i < tics.length; i++){
        tics[i].innerHTML = "#";
    }
    board.setAttribute("gameOn", "true");
}

function playerTurn (id, count, turns){
    var turn = document.getElementById("gameBoard").getAttribute("turn");
    var computerTurn = document.getElementById("gameBoard").getAttribute("computerTurn");
    var spotTaken = document.getElementById(id).innerHTML;
    if (spotTaken === "#"){
        count++;
        turns[id] = turn;
        document.getElementById("gameBoard").setAttribute("turns", turns);
        document.getElementById(id).innerHTML = turn;
        gameOn = winCondition(turns, turn);
        if (gameOn === false){
            computerMove = computersTurn(turns, count, computerTurn);
            document.getElementById("message").innerHTML = `It's ${turn}'s turn.`;
            turns[computerMove] = computerTurn;
            document.getElementById("gameBoard").setAttribute("turns", turns);
            gameOn = winCondition(turns, computerTurn);
        }
    }
}

function winCondition(trackMoves, currentMove) {
    board = document.getElementById("gameBoard");
    var gameOn;

    if (trackMoves[0] === currentMove && trackMoves[1] === currentMove && trackMoves[2] === currentMove) {
        gameOn = true;
        reset();
        alert("Player " + currentMove + " wins!");
    } else if (trackMoves[2] === currentMove && trackMoves[4] === currentMove && trackMoves[6] === currentMove) {
        gameOn = true;
        reset();
        alert("Player " + currentMove + " wins!");
    } else if (trackMoves[0] === currentMove && trackMoves[3] === currentMove && trackMoves[6] === currentMove) {
        gameOn = true;
        reset();
        alert("Player " + currentMove + " wins!");
    } else if (trackMoves[0] === currentMove && trackMoves[4] === currentMove && trackMoves[8] === currentMove) {
        gameOn = true;
        reset();
        alert("Player " + currentMove + " wins!");
    } else if (trackMoves[1] === currentMove && trackMoves[4] === currentMove && trackMoves[7] === currentMove) {
        gameOn = true;
        reset();
        alert("Player " + currentMove + " wins!");
    } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
        gameOn = true;
        reset();
        alert("Player " + currentMove + " wins!");
    } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
        gameOn = true;
        reset();
        alert("Player " + currentMove + " wins!");
    } else if (trackMoves[3] === currentMove && trackMoves[4] === currentMove && trackMoves[5] === currentMove) {
        gameOn = true;
        reset();
        alert("Player " + currentMove + " wins!");
    } else if (trackMoves[6] === currentMove && trackMoves[7] === currentMove && trackMoves[8] === currentMove) {
        gameOn = true;
        reset();
        alert("Player " + currentMove + " wins!");
    } else if(!(trackMoves.includes("#"))){
        gameOn = true;
        reset();
        alert("It is a Draw!");
    } else {
        gameOn = false;
    }
    return gameOn
}

function main(){
    var turns = ["#","#","#","#","#","#","+","#"];
    var board = document.getElementById("gameBoard");
    var startTurn = prompt("Choose Your Move", "Type X or O").toUpperCase();

    board.setAttribute("count", 0);
    board.setAttribute("turns", turns);

    switch (startTurn){
        case "X":
            board.setAttribute("computerTurn", "O");
            board.setAttribute("turn", "X");
            document.getElementById("message").innerHTML += `<p>Player X gets to start!</p>`;
            break;
        case "O":
            board.setAttribute("computerTurn", "X");
            board.setAttribute("turn", "O");
            document.getElementById("message").innerHTML += `<p>Player O gets to start!</p>`;
            break;
        case null:
            alert("Sorry. Please type X or O");
            window.location.reload(true);
        break;
        default:
            alert("Sorry. Please type X or O");
            window.location.reload(true);
            break;
    }

    resetButton = document.getElementById("reset");
    resetButton.addEventListener('click', reset);
    setOnClick();
}

main()