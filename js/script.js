{
let resultPlayer = 0;
let resultComputer = 0;

const playGame = function(playerInput) {
    
    clearMessages();
    clearResult();

const getMoveName = function(argMoveId){
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

    const displayResult = function (argComputerPlayer, argInputPlayer) {
        console.log('moves:', argComputerPlayer, argInputPlayer);
        if(argComputerPlayer == 'kamień' && argInputPlayer == 'papier') {
            printMessage(`Ty wygrywasz!`);
            resultPlayer += 1;
        } else if (argComputerPlayer == 'papier' && argInputPlayer == 'nożyce') {
            resultPlayer += 1;
            printMessage(`Ty wygrywasz!`);
        } else if (argComputerPlayer == 'nożyce' && argInputPlayer == 'kamień') {
            resultPlayer += 1;
            printMessage(`Ty wygrywasz!`);
        } else if (argComputerPlayer == 'papier' && argInputPlayer == 'kamień') {
            resultComputer += 1;
            printMessage(`Ja wygrywam!`);
        } else if (argComputerPlayer == 'nożyce' && argInputPlayer == 'papier') {
            resultComputer += 1;
            printMessage(`Ja wygrywam!`);
        } else if (argComputerPlayer == 'kamień' && argInputPlayer == 'nożyce') {
            resultComputer += 1;
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

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    printMessage(`Mój ruch to ${computerMove}`);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    const playerMove = getMoveName(playerInput);
    printMessage(`Twój ruch to: ${playerMove}`);

    displayResult(computerMove, playerMove);
    printResult(`Ty: ${resultPlayer} - Ja: ${resultComputer}`);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  
  document.getElementById('play-scissor').addEventListener('click', function(){
    playGame(3);
  });
  

}
