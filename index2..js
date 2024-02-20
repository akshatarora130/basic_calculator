let a = 0;
let b = null;
let sign = null;

const display = document.getElementById("display");
display.value = 0;

const numClick = (num) => {
    if (sign == null) {
        a = (a * 10) + num;
        display.value = a;
    } else {
        if (b === null) {
            b = num;
        } else {
            b = (b * 10) + num;
        }
        display.value = b;
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
    display.value = a;
}

const equal = () => {
    if(b != null){
        compute();
    }
    sign = null;
}

const compute = () => {
    if (sign === '+') {
        fetch("http://localhost:3000/sum?a=" + a + "&b=" + b).then((response) => {
            response.json().then((data) => {
                a = parseInt(data);
                display.value = a;
            })
        })
    }
    else if (sign === '-') {
        fetch("http://localhost:3000/sub?a=" + a + "&b=" + b).then((response) => {
            response.json().then((data) => {
                a = parseInt(data);
                display.value = a;
            })
        })
    }
    else if (sign === '*') {
        fetch("http://localhost:3000/mul?a=" + a + "&b=" + b).then((response) => {
            response.json().then((data) => {
                a = parseInt(data);
                display.value = a;
            })
        })
    }
    else if (sign === '/') {
        if (b !== 0) {
            fetch("http://localhost:3000/div?a=" + a + "&b=" + b).then((response) => {
                response.json().then((data) => {
                    a = parseInt(data);
                    display.value = a;
                })
            })
        } else {
            alert("Division by zero error!");
        }
    }
    b = null;
}