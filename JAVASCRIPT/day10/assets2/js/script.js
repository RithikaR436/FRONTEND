// add
function add(a, b) {
    return a + b;
}

const addExplicit = (a, b) => {
    return a + b;
};

const addImplicit = (a, b) => a + b;


// square
function square(n) {
    return n * n;
}

const squareExplicit = (n) => {
    return n * n;
};

const squareImplicit = n => n * n;


// test
console.log(addExplicit(2, 3));    // 5
console.log(addImplicit(2, 3));    // 5
console.log(squareExplicit(4));    // 16
console.log(squareImplicit(4));    // 16