let num = Number(prompt("enter a number"));

function factor(num) {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    console.log(fact);
}

factor(num);