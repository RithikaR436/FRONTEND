
console.log(a); 
var a = 1;

let b = 2;

if (true) {
  var x = "var";   
  let y = "let";    
}
console.log(x); 

var p = 1; 
var p = 2;  

let m = 1; 
m = 2;

for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0); 
for (let j = 0; j < 3; j++) setTimeout(() => console.log(j), 0);