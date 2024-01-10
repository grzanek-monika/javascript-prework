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

if(computerMove == 'kamień' && playerMove == 'papier') {
    printMessage(`Ty wygrywasz!`);
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage(`Ty wygrywasz!`);
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage(`Ty wygrywasz!`);
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage(`Ja wygrywam!`);
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage(`Ja wygrywam!`);
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage(`Ja wygrywam!`);
} else {
    printMessage(`Ups... Coś poszło nie tak, spróbuj jeszcze raz.`)
}
/*printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');

let computerMove = `kamień`;

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = 'papier';

printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');*/