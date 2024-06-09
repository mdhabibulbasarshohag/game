const player = document.getElementById('player');
const winners = document.getElementById('winners');
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
const inputNumberOne = document.getElementById('input-number-one');
const inputNumberTwo = document.getElementById('input-number-two');
const playerBtnOne = document.getElementById('player-btn-one');
const playerBtnTwo = document.getElementById('player-btn-two');
const inputWarning = document.getElementById('input-warning');
const chance = document.getElementById('chance');
const remain = document.getElementById('remain');



let playerNumber;
let chanceNumber = 3;

playerBtnOne.addEventListener(
    'click', function () {
        if (inputNumberOne.value) {
            if (inputNumberOne.value - 15) {
                if (inputNumberOne.value >= 0 && inputNumberOne.value <= 9) {
                    inputWarning.innerText = '';
                    playerNumber = inputNumberOne.value;
                    player.innerText = 'Player Two';
                    playerTwo.style.display = 'block';
                    playerOne.style.display = 'none';
                } else {
                    inputWarning.innerText = 'please enter 1 to 9 not -1 number';
                    inputNumberOne.value = '';
                }
            } else {
                inputWarning.innerText = 'please enter a number';
                inputNumberOne.value = '';
            }
        } else {
            inputWarning.innerText = 'Please Give a input Value';
            inputNumberOne.value = '';
        }
    }
)



playerBtnTwo.addEventListener(
    'click', function () {
        if (inputNumberTwo.value) {
            if (inputNumberTwo.value - 1) {
                if (inputNumberTwo.value >= 0 && inputNumberTwo.value <= 9) {
                    inputWarning.innerText = '';
                    chanceNumber--;
                    if (chanceNumber !== 0) {
                        if (playerNumber == inputNumberTwo.value) {
                            winners.innerText = 'Winner Winner';
                            winners.style.color = 'green';
                            remain.style.display = 'none';
                        } else {
                            chance.innerText = chanceNumber;
                            inputNumberTwo.value = '';
                        }
                    } else {
                        winners.innerText = 'Game Over';
                        remain.style.display = 'none';
                        inputNumberTwo.value = '';
                        winners.style.color = 'red';
                    }
                } else {
                    inputWarning.innerText = 'please enter 1 to 9 not -1 number';
                    inputNumberTwo.value = '';
                }
            } else {
                inputWarning.innerText = 'please enter a number';
                inputNumberTwo.value = '';
            }
        } else {
            inputWarning.innerText = 'Please Give a input Value';
            inputNumberTwo.value = '';

        }
    }
)