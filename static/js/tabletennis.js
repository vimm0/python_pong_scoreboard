//variable declaration 
playerOneCount = 0;
playerTwoCount = 0;
count = 0;
//counts the left hand player
function playerOneButton() {
    // var button = document.getElementById("btn1");
    var display = document.getElementById("showL");
    playerOneCount++;
    display.innerHTML = playerOneCount;
    if (count == 0) {
        showArrowPlayerOne();
    }
    count++;
    divideAndShow(count);
    if (playerOneCount == 10 && playerTwoCount == 10) {
        showDeuceBoth();
        Deuce();
    }
    if (playerOneCount == 11) {
        display.innerHTML = "Game Over:player one wins";
        gameOver();
    }
}
//divide the service as multiple of two
function divideAndShow() {
    if (count % 2 == 0) {
        toggleVisibility();
    }
}
//counts the right hand player
function playerTwoButton() {
    var display = document.getElementById("showR");
    playerTwoCount++;
    display.innerHTML = playerTwoCount;
    if (count == 0) {
        showArrowPlayerTwo();
    }
    count++;
    divideAndShow(count);
    if (playerOneCount == 10 && playerTwoCount == 10) {
        showDeuceBoth();
        Deuce();
    }
    if (playerTwoCount == 11) {
        display.innerHTML = "Game Over:player Two wins";
        gameOver();
    }
}
//Deuce checking
function Deuce() {
    btn1.onclick = function() {
        buttonOneVisible();
        playerOneShowAdvantage();
        advantageOne();
        btn1.onclick = function() {
            playerOneWins();
            gameOver();
        }
    }
    btn2.onclick = function() {
        buttonTwoVisible();
        playerTwoShowAdvantage();
        advantageTwo();
        btn2.onclick = function() {
            playerTwoWins();
            gameOver();
        }
    }
}
// Advantage checking
function advantageOne() {
    btn2.onclick = function() {
        buttonTwoVisible();
        advantageTwo();
        showDeuceBoth();
    }
    btn1.onclick = function() {
        playerOneShowAdvantage();
        btn1.onclick = function() {
            playerOneWins();
            gameOver();
        }
    }
}
function advantageTwo() {
    btn1.onclick = function() {
        buttonOneVisible();
        advantageOne();
        showDeuceBoth();
    }
    btn2.onclick = function() {
        playerTwoShowAdvantage();
        btn2.onclick = function() {
            playerTwoWins();
            gameOver();
        }
    }
}
//Function 

//toggle the visiblity of css element
function toggleVisibility() {
    // $(document).ready(function(){
    //     $()
    // }
    // }
    if (arrowR.style.visibility == 'visible' || arrowL.style.visibility != 'visible') {
        showArrowPlayerOne();
    } else if (arrowL.style.visibility == 'visible' || arrowR.style.visibility != 'visible') {
        showArrowPlayerTwo();
    }
}
//shows the winner as player One(l.h.s)
function playerOneWins() {
    document.getElementById("activeL").innerHTML = "Game Over";
    document.getElementById("showL").innerHTML = 'Player One wins';
}
//shows the winner as player two(r.h.s)
function playerTwoWins() {
    document.getElementById("activeR").innerHTML = "Game Over";
    document.getElementById("showR").innerHTML = 'Player One wins';
}
//shows advantage and arrow for player one
function buttonOneVisible() {
    if (arrowR.style.visibility == 'visible' || arrowL.style.visibility != 'visible') {
        playerOneShowAdvantage();
        showArrowPlayerOne();
    } else if (arrowR.style.visibility != 'visible' || arrowL.style.visibility == 'visible') {
        playerOneShowAdvantage();
        showArrowPlayerTwo();
    }
}
//shows advantage and arrow for player two
function buttonTwoVisible() {
    if (arrowR.style.visibility != 'visible' || arrowL.style.visibility == 'visible') {
        playerTwoShowAdvantage();
        showArrowPlayerTwo();
    } else if (arrowR.style.visibility == 'visible' || arrowL.style.visibility != 'visible') {
        playerTwoShowAdvantage();
        showArrowPlayerOne();
    }
}
//shows both side as deuce
function showDeuceBoth() {
    document.getElementById("showL").innerHTML = "Deuce";
    document.getElementById("showR").innerHTML = "Deuce";
}
//shows player one as advantage
function playerOneShowAdvantage() {
    document.getElementById("showL").innerHTML = "Advantage";
    document.getElementById("showR").innerHTML = "...";
}
//shows player two as advantage
function playerTwoShowAdvantage() {
    document.getElementById("showR").innerHTML = "Advantage";
    document.getElementById("showL").innerHTML = "...";
}
//service visiblity
function showArrowPlayerTwo() {
    document.getElementById('arrowR').style.visibility = 'visible';
    document.getElementById('arrowL').style.visibility = 'hidden';
    document.getElementById('status').innerHTML = 'Player Two is serving';
}
//service visiblity
function showArrowPlayerOne() {
    document.getElementById('arrowL').style.visibility = 'visible';
    document.getElementById('arrowR').style.visibility = 'hidden';
    document.getElementById('status').innerHTML = 'Player one is serving';
}
//check
function check() {
    if (playerOneCount > playerTwoCount) {
        document.getElementById("showL").innerHTML = "Player One wins";
    }
    if (playerOneCount < playerTwoCount) {
        document.getElementById("showR").innerHTML = "player Two wins";
    }
    if (playerOneCount === playerTwoCount && playerOneCount != 0 && playerTwoCount != 0) {
        window.alert("Draw Game");
        gameOver();
    }
}
//Refresh the page
function refresh() {
    document.location.reload(true);
}
//Tossing for turn
function toss() {
    var ran = Math.random();
    if (ran <= 0.5) {
        showArrowPlayerOne();
        document.getElementById("toss").disabled = true;
    } else {
        showArrowPlayerTwo();
        document.getElementById("toss").disabled = true;
    }
}
//Game Over
function gameOver() {
    check.disabled = true;
    toss.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
}
