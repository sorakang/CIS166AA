function playGame() {
    var randNum = Math.floor(Math.random() * 100) + 1;

    var min = 50;
    var max = 75;

    if (randNum > min && randNum < max) {
        result.textContent = 'Your Number: ' + randNum + ', You Won!'
    } else {
        result.textContent = 'Your Number: ' + randNum + ', Keep Trying!'
    }
}

