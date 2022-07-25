let getVal = function() {
    const val = document.querySelector('input').value;
    if (isNaN(val)) {
        console.log('ERROR')
    } else {
        console.log(val);
        squareRoot(val);
        prime(val);
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
