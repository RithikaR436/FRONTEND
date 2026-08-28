
// 1. GLOBAL SCOPE
var globalVar = "I am global var";
let globalLet = "I am global let";
const globalConst = "I am global const";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);


// 2. FUNCTION SCOPE
function testFunctionScope() {
    var functionVar = "I am inside function (var)";
    let functionLet = "I am inside function (let)";
    console.log(functionVar);
    console.log(functionLet);
}
testFunctionScope();




// 3. BLOCK SCOPE
if (true) {
    var blockVar = "I am inside block (var)";
    let blockLet = "I am inside block (let)";
    const blockConst = "I am inside block (const)";

    
    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
}

console.log(blockVar);    
