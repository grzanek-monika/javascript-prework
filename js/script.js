let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(`Wylosowana liczba to: ${randomNumber}`);

let computerMove = 'nieznana liczba';

if(randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier'
} else if (randomNumber == 3) {
    computerMove = 'nożyce'
} 

printMessage(`Mój ruch to ${computerMove}`);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = 'nienzany  ruch';

if(playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if(playerInput == '3') {
    playerMove = 'nożyce'
}

printMessage(`Twój ruch to: ${playerMove}`);

/*printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');

let computerMove = `kamień`;

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = 'papier';

printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');*/