var player1 = "Player 1"
var player2 = "Player 2"

function editname() {
player1 = prompt("Change player1 name");
player2 = prompt("Change player2 name");
}

document.querySelector("p.player1")
.innerHTML = player1;

document.querySelector("p.player2")
.innerHTML = player2;
function dice(){
    setTimeout(function(){
        var random1 = Math.floor(Math.random() * 6) +1;
        var random2 = Math.floor(Math.random() * 6) +1;
        document.querySelector(".dice1"). setAttribute("src", "images/dice1" + random1 + ".png")
        document.querySelector(".dice1"). setAttribute("src", "images/dice2" + random2 + ".png")
        
        if(random1 === random2){
            document.querySelector("h1"). innerHTML = "Draw!;"
        }
        else if(random1 > random2){
            document.querySelector("h1"). innerHTML = (player1 + "Wins!");
        }
        else{
            document.querySelector(h1). innerHTML = (player2 + "Wins!")
        }
    } ,250);
}