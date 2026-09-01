const numbers = [10, 20, 30];

const student = {
    name: "Ravi",
    age: 25,
    course: "JavaScript"
};


const [first, second, third] = numbers;

console.log(first);   
console.log(second);  
console.log(third);   

const { name, age, course } = student;

console.log(name);    
console.log(age);     
console.log(course);  