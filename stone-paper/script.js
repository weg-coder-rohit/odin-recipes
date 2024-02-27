function getComputerChoice() {
    const str = ["Rock", "Paper", "Scissor"];
    let randomnum = Math.floor(Math.random() * str.length);
    return str[randomnum];
}

let i = getComputerChoice();
console.log(i)