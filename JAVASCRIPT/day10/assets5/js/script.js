function studentInfo(name, course, city = "Chennai") {
    return `${name} is learning ${course} in ${city}.`;
}

console.log(studentInfo("Rithika", "JavaScript"));           
console.log(studentInfo("Ravi", "Python", "Bangalore"));     