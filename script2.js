function click(tic, turn, count, turns, computerTurn){
    var slot = tic.id;
    playerTurn(turn, slot, count, turns, computerTurn);
}

function setOnClick(){
    var tics = document.getElementsByClassName("tic");
    for(i = 0; i < tics.length; i++){
        tics[i].onclick = click;
    }
}

function computersTurn(turns, count, computerTurn){
    var taken = false;
    while (taken === false && count !== 5){
        var computerMove = (Math.random() * 10).toFixed();
        document.write(`${computerMove}<br />`)
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
    turns = ["#","#","#","#","#","#","+","#"];
    count = 0;
    var tics = document.getElementsByClassName("tic");
    for(i = 0; i < tics.length; i++){
        tics[i].innerHTML = "#";
    }
    gameOn = true;
}

function playerTurn (turn, id, count, turns, computerTurn){
    var spotTaken = document.getElementById(id).innerHTML;
    if (spotTaken ==="#"){
        count++;
        turns[id] = turn;
        document.getElementById(id).innerHTML = turn;
        //gameOn = winCondition(turns,turn);
        if (gameOn === false){
            computerMove = computersTurn(turns, count, computerTurn);
            document.getElementById("message").innerHTML = `It's ${turn}'s turn.`;
        //    gameOn = winCondition(turns, computerTurn);
        }
    }
}

function winCondition(trackMoves, currentMove) {
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
    var computerTurn = "";
    var turn = "";
    var gameOn = false;
    var count = 0;
    var startTurn = prompt("Choose Your Move", "Type X or O").toUpperCase();

    switch (startTurn){
        case "X":
            computerTurn = "O";
            turn = "X";
            document.getElementById("message").innerHTML += `<p>Player ${turn} gets to start!</p>`;
            break;
        case "O":
            computerTurn = "X";
            turn = "O";
            document.getElementById("message").innerHTML += `<p>Player ${turn} gets to start!</p>`;
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

    setOnClick(turn, count, turns, computerTurn)
    //var id = 8
    //playerTurn(turn, id, count, turns, computerTurn)
    //computersTurn(turns, count, computerTurn)
    document.write(turns)
    //reset();
}

main()