let a = 0;
let b = null;
let sign = null;

const display = document.getElementById("display");
display.innerHTML = 0;

const numClick = (num) => {
    if (sign == null) {
        a = (a * 10) + num;
        display.innerHTML = a;
    } else {
        if (b === null) {
            b = num;
        } else {
            b = (b * 10) + num;
        }
        display.innerHTML = b;
    }
}

const signClick = (s) => {
    if (b !== null) {
        compute();
    }
    sign = s;
}

const cClick = () => {
    a = 0;
    b = null;
    sign = null;
    display.innerHTML = a;
}

const equal = () => {
    if(b != null){
        compute();
    }
    sign = null;
}

const compute = () => {
    if (sign === '+') {
        a = a + b;
    }
    else if (sign === '-') {
        a = a - b;
    }
    else if (sign === '*') {
        a = a * b;
    }
    else if (sign === '/') {
        if (b !== 0) {
            a = a / b;
        } else {
            alert("Division by zero error!");
        }
    }
    display.innerHTML = a;
    b = null;
}