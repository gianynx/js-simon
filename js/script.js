/*
Consegna:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

function randomNumbers(numNumbers, max) {
    const numbersBox = document.getElementById('numbersBox');
    const numbers = [];
    while (numbers.length < numNumbers) {
        const number = getRndInteger(1, max);
        // console.log(number);
        if (!numbers.includes(number)) {
            numbers.push(number);
        };
        // console.log(numbers);
    };
    numbersBox.innerHTML = numbers;
    return numbers;
}
randomNumbers(5);


// const countdown = document.getElementById('time');
// let count = 10;
// countdown.innerHTML = count;
// const time = setInterval(() => {
//     if(count === 1) {
//         clearInterval(time);
//         count = 'Inserisci i numeri che hai visto precedentemente!';
//     } else {
//         count--;
//     }
//     countdown.innerHTML = count;
// }, 1000);

const inputValue = document.querySelectorAll('#input');

