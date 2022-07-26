const answerText = document.createElement('p');
answerText.classList.add('answerText');

let getVal = function() {
    const val = document.querySelector('input').value;
    if (isNaN(val) || val === "" || val <= 0) {
        alert('Please insert a number greater than 0')
    } else {
        calculate(val);
    } 
}

let calculate = function(val) {
    squareRoot(val);
    prime(val);
    factors(val);
    listPrimes(val);
    naturalLogarithm(val);
    toBinary(val);
}

function squareRoot(num) {
    let sqrRoot = Math.sqrt(num);
    const answerText1 = document.createElement('p');
    answerText1.classList.add('answerText');
    answerText1.textContent = `The square root of ${num} is ${sqrRoot}`
    document.getElementById('answers').appendChild(answerText1);
}

let prime = function(val) {
        const answerText2 = document.createElement('p');
        answerText2.classList.add('answerText');
    if (isPrime(val) === true) {
        answerText2.textContent = `${val} is a Prime Number`
        document.getElementById('answers').appendChild(answerText2);
    } else {
        answerText2.textContent = `${val} is not a Prime Number`
        document.getElementById('answers').appendChild(answerText2);
    }
}

let listPrimes = function(val) {
    let primeArray = [];
    const answerText3 = document.createElement('p');
    answerText3.classList.add('answerText');
    for (let i = 0; i < val; i++) {
        if(isPrime(i) === true) {
            primeArray.push(i)
        }
    }
    answerText3.textContent = `Prime numbers less than ${val} are ${primeArray.join(' ')}`
    document.getElementById('answers').appendChild(answerText3);
}

function isPrime(num) {
    if (num < 2) {
        return false
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true    
}

function factors(num) {
    let factorArray = [];
    const answerText4 = document.createElement('p');
    answerText4.classList.add('answerText');
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factorArray.push(i);
        }
    }
    answerText4.textContent = `The factors of ${num} are ${factorArray.join(' ')}`
    document.getElementById('answers').appendChild(answerText4);
}

function naturalLogarithm(num) {
    let log = Math.log(num)
    const answerText5 = document.createElement('p');
    answerText5.classList.add('answerText');
    answerText5.textContent = `The natural logarithm of ${num} is ${log}`
    document.getElementById('answers').appendChild(answerText5);
}

function toBinary(number) {
    let num = number
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary = (num % 2) + (binary);
    }
    const answerText6 = document.createElement('p');
    answerText6.classList.add('answerText');
    answerText6.textContent = `${number} in binary is ${binary}`
    document.getElementById('answers').appendChild(answerText6);
}