// selectors
const gameAlert = document.getElementById('gameAlert');
const rockChoice = document.getElementById('rockChoice');
const paperChoice = document.getElementById('paperChoice');
const scissorsChoice = document.getElementById('scissorsChoice');

function computerChoice() {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) return 'rock';
    if (random === 1) return 'paper';
    return 'scissors';
}

const determineWinner = (userChoice) => {
    const compChoice = computerChoice();

    if (userChoice === compChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        return compChoice === 'paper'
            ? "Computer Won! - Paper wraps around the user's rock!"
            : 'User Won! - Rock breaks the computer scissors!';
    }

    if (userChoice === 'paper') {
        return compChoice === 'scissors'
            ? "Computer Won! - Scissors cuts through user's paper!"
            : 'User Won! - Paper wraps around the computer rock!';
    }

    return compChoice === 'rock'
        ? "Computer Won! - Rock breaks the user's scissors!"
        : 'User Won! - Scissors cuts through computer paper!';
};

function play(choice) {
    const message = determineWinner(choice);

    gameAlert.textContent = message;
    gameAlert.classList.remove('text-emerald-500', 'text-red-500');

    if (message.includes('User Won!')) {
        gameAlert.classList.add('text-emerald-500');
    } else if (message.includes('Computer Won!')) {
        gameAlert.classList.add('text-red-500');
    }
}

rockChoice.addEventListener('click', () => play('rock'));
paperChoice.addEventListener('click', () => play('paper'));
scissorsChoice.addEventListener('click', () => play('scissors'));
