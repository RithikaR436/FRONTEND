
let cities = ["Chennai", "Mumbai", "Delhi", "Bangalore", "Kolkata"];


let removedCity = cities.shift();   
console.log("Removed city:", removedCity);
console.log("After shift():", cities);


cities.unshift("Hyderabad");
console.log("After unshift():", cities);