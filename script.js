let getVal = function() {
    const val = document.querySelector('input').value;
    if (isNaN(val)) {
        console.log('ERROR')
    } else {
        console.log(val);
        squareRoot(val);
    } 
}

function squareRoot(num) {
    let sqrRoot = Math.sqrt(num);
    console.log(`the square root of ${num} is ${sqrRoot}`)
}