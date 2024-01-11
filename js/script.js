function getMoveName(argMoveId){
    if(argMoveId == 1) {
    return 'kamień';
    } else if (argMoveId == 2) {
        return'papier'
    } else if (argMoveId == 3) {
        return 'nożyce'
    } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
    }
}

function displayResult(argComputerPlayer, argInputPlayer) {
    console.log('moves:', argComputerPlayer, argInputPlayer);
    if(argComputerPlayer == 'kamień' && argInputPlayer == 'papier') {
        printMessage(`Ty wygrywasz!`);
    } else if (argComputerPlayer == 'papier' && argInputPlayer == 'nożyce') {
        printMessage(`Ty wygrywasz!`);
    } else if (argComputerPlayer == 'nożyce' && argInputPlayer == 'kamień') {
        printMessage(`Ty wygrywasz!`);
    } else if (argComputerPlayer == 'papier' && argInputPlayer == 'kamień') {
        printMessage(`Ja wygrywam!`);
    } else if (argComputerPlayer == 'nożyce' && argInputPlayer == 'papier') {
        printMessage(`Ja wygrywam!`);
    } else if (argComputerPlayer == 'kamień' && argInputPlayer == 'nożyce') {
        printMessage(`Ja wygrywam!`);
    }  else if (argComputerPlayer == 'kamień' && argInputPlayer == 'kamień') {
        printMessage(`Remis!`);
    } else if (argComputerPlayer == 'papier' && argInputPlayer == 'papier') {
        printMessage(`Remis!`);
    }else if (argComputerPlayer == 'nożyce' && argInputPlayer == 'nożyce') {
        printMessage(`Remis!`);
    } else {
        printMessage(`Ups... Coś poszło nie tak, spróbuj jeszcze raz.`)
    }
}
  

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(`Wylosowana liczba to: ${randomNumber}`);

let computerMove = getMoveName(randomNumber);

printMessage(`Mój ruch to ${computerMove}`);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);

printMessage(`Twój ruch to: ${playerMove}`);

displayResult(computerMove, playerMove);






/*printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');

let computerMove = `kamień`;

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = 'papier';

printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');*/