/* Create one "keo bua bao" game */
let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
    let player = prompt("Please enter your choice: rock, paper, scissors");
    if (player) {
        playerChoice = player.trim().toLowerCase();
        if (
            playerChoice === "rock" ||
            playerChoice === "paper" ||
            playerChoice === "scissors"
        ) {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer =
                computerChoice === 1 ? "rock"
                    : computerChoice === 2 ? "paper"
                        : "scissors";
            let result = playerChoice === computer
                ? "Tie game!"
                : playerChoice === "rock" && computer === "paper"
                    ? `Player: ${playerChoice} \nComputer: ${computer}
            \nComputer wins!`
                    : playerChoice === "paper" && computer === "scissors"
                        ? `Player: ${playerChoice} \nComputer: ${computer}
            \nComputer wins!`
                        : playerChoice === "scissors" && computer === "rock"
                            ? `Player: ${playerChoice} \nComputer: ${computer}
            \nComputer wins!`
                            : `Player: ${playerChoice} \nComputer: ${computer}
            \nPlayer wins!`
            alert(result);
            let again = confirm("Play again?");
            again ? location.reload() : alert("OK, thanks for playing");
        } else {
            alert("You didn't enter: rock, paper, scissors");
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.")
    }
} else {
    alert("Ok, maybe next time.")
}
