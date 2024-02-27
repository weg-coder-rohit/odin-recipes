const str = ["Rock", "Paper", "Scissor"];
function getComputerChoice() {
    let randomnum = Math.floor(Math.random() * str.length);
    return str[randomnum];
}
let computerSelection = getComputerChoice();
let cflag = 0;
let pflag = 0;
let rounds = 5;
while (rounds >= 1) {
    function playRound(computerSelection) {
        let playerSelection = prompt("write one, Rock or Paper or Scissor");
        csel = computerSelection.toLowerCase();
        psel = playerSelection.toLowerCase();
        if ((csel === "rock" && psel === "Paper") && (csel === "Paper" && psel === "scissor") && (csel === "scissor" && psel === "rock")){
            pflag += 1;
            rounds -= 1;
            console.log(`Player Wins! ${psel} beats ${csel}`);
        }
        else if ((csel === "rock" && psel === "scissor") && (csel === "paper" && psel === "rock") && (csel === "scissor" && psel === "paper")) {
            console.log(`Computer Wins! ${csel} beats ${psel}`);
            cflag += 1;
            rounds -= 1;
        }
        else {
            console.log(`Draw ${csel} and ${psel}`);
            rounds -= 1;
        }
    
    }
}

playRound(computerSelection);