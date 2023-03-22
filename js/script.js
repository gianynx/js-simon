/*
Consegna:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const playBtn = document.getElementById('btnPlay');
const input = document.querySelectorAll ('input[name="number"]');
const clickBtn = document.getElementById('btnClickMe');
const cancelBtn = document.getElementById('btnCancel');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNumber(numNumbers) {
    const numbersBox = document.getElementById('numbersBox');
    const numbers = [];
    while (numbers.length < numNumbers) {
        const number = getRndInteger(1, 5);
        if (!numbers.includes(number)) {
            numbers.push(number);
        };
    };
    numbersBox.innerHTML = numbers;
    return numbers;
}

function COUNTDOWN() {
    const countdown = document.getElementById('time');
    let count = 10;
    countdown.innerHTML = count;
    const time = setInterval(() => {
        if (count === 1) {
            clearInterval(time);
            const preCount = document.getElementById('preCountdown');
            preCount.classList.add('none');
            const postCount = document.getElementById('postCountdown');
            postCount.classList.remove('none');
        } else {
            count--;
        };
        countdown.innerHTML = count;
    }, 1000);
}

playBtn.addEventListener('click', play);
function play() {
    let randomArray = randomNumber(5);
    COUNTDOWN();
    numbersBox.classList.remove('none');
    clickBtn.addEventListener('click', function () {
        generate(randomArray);
    });
}

// creo la function 'generate' per controllare se combaciano i valori input che inserisce l'user con i valori generati dall'array
function generate(arrayToCheck) {
    const userNumbers = [];
    let allValues = true;
    for (let a = 0; a < input.length; a++) {
        const value = parseInt(input[a].value);
        if (isNaN(value)) {
            allValues = false;
            break;
        } else {
            userNumbers.push(value);
        };
    }
// se tutti i valori sono numeri interi validi, la funzione confronta l'input dell'utente con l'array originale
    if (allValues) {
        let success = true;
        for (let i = 0; i < arrayToCheck.length; i++) {
            if (arrayToCheck[i] !== userNumbers[i]) {
                success = false;
                break;
            };
        };
        const message = document.getElementById('messages');
        message.innerHTML = success ? `You won!` : `You lost!`;
    };
}

cancelBtn.addEventListener('click', reset);
function reset() {
    for (let a = 0; a < input.length; a++) {
        input[a].value = '';
    };
}