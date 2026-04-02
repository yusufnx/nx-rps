// selectors
const gameAlert = document.getElementById('gameAlert');
const rockChoice = document.getElementById('rockChoice');
const paperChoice = document.getElementById('paperChoice');
const scissorsChoice = document.getElementById('scissorsChoice');

function computerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else if (computerChoice === 2) {
        return 'scissors';
    }

    return computerChoice;
}

function userChoice(userChoice) {
    if (userChoice === 'rock') {
        return userChoice;
    } else if (userChoice === 'paper') {
        return userChoice;
    } else if (userChoice === 'scissors') {
        return userChoice;
    }
}

const determineWinner = (userChoice) => {
    const comChoice = computerChoice();

    if (userChoice === comChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        if (comChoice === 'paper') {
            const userWon =
                "Computer Won! - Paper wraps around the user's rock!";
            return userWon;
        } else {
            const userWon = 'User Won! - Rock breaks the computer scissors!';
            return userWon;
        }
    }

    if (userChoice === 'paper') {
        if (comChoice === 'scissors') {
            return "Computer Won! - Scissors cuts through user's paper!";
        } else {
            return 'User Won! - Paper wraps around the computer rock!';
        }
    }

    if (userChoice === 'scissors') {
        if (comChoice === 'rock') {
            return "Computer Won! - Rock breaks the user's scissors!";
        } else {
            return 'User Won! - Scissors cuts through computer paper!';
        }
    }
};

rockChoice.addEventListener('click', () => {
    const gameAlertMsg = determineWinner('rock');
    gameAlert.innerHTML = gameAlertMsg;
    if (gameAlertMsg.includes('User Won!')) {
        gameAlert.classList.add('text-emerald-500');
    } else {
        gameAlert.classList.remove('text-emerald-500');
    }

    if (gameAlertMsg.includes('Computer Won!')) {
        gameAlert.classList.add('text-red-500');
    } else {
        gameAlert.classList.remove('text-red-500');
    }
});

paperChoice.addEventListener('click', () => {
    const gameAlertMsg = determineWinner('paper');
    gameAlert.innerHTML = gameAlertMsg;

    if (gameAlertMsg.includes('User Won!')) {
        gameAlert.classList.add('text-emerald-500');
    } else {
        gameAlert.classList.remove('text-emerald-500');
    }

    if (gameAlertMsg.includes('Computer Won!')) {
        gameAlert.classList.add('text-red-500');
    } else {
        gameAlert.classList.remove('text-red-500');
    }
});

scissorsChoice.addEventListener('click', () => {
    const gameAlertMsg = determineWinner('scissors');
    gameAlert.innerHTML = gameAlertMsg;
    if (gameAlertMsg.includes('User Won!')) {
        gameAlert.classList.add('text-emerald-500');
    } else {
        gameAlert.classList.remove('text-emerald-500');
    }

    if (gameAlertMsg.includes('Computer Won!')) {
        gameAlert.classList.add('text-red-500');
    } else {
        gameAlert.classList.remove('text-red-500');
    }
});
