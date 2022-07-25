let getVal = function() {
    const val = document.querySelector('input').value;
    if (isNaN(val)) {
        console.log('ERROR')
    } else {
        console.log(val);
        squareRoot(val);
        prime(val);
        factors(val);
        listPrimes(val);
        naturalLogarithm(val);
        toBinary(val);
    } 
}

function squareRoot(num) {
    let sqrRoot = Math.sqrt(num);
    console.log(`the square root of ${num} is ${sqrRoot}`)
}

let prime = function(val) {
    if (isPrime(val) === true) {
        console.log(`${val} is a Prime Number`)
    } else {
        console.log(`${val} is not a Prime Number`)
    }
}

let listPrimes = function(val) {
    let primeArray = [];
    for (let i = 0; i < val; i++) {
        if(isPrime(i) === true) {
            primeArray.push(i)
        }
    }
    let list = `Prime numbers less than ${val} are ${primeArray.join(' ')}`
    console.log(list);
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
        
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factorArray.push(i);
        }
    }
    let answer = `The factors of ${num} are ${factorArray.join(' ')}`
    console.log(answer);
}

function naturalLogarithm(num) {
    let log = Math.log(num)
    console.log(`The natural logarithm of ${num} is ${log}`)
}

function toBinary(number) {
    let num = number
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary = (num % 2) + (binary);
    }
    console.log(`${number} in binary is ${binary}`)
}