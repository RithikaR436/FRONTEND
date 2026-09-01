class Student {
    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Mark: ${this.mark}`);
    }
}


const student1 = new Student("Rithika", 22, 89);
student1.displayDetails(); 
const student2 = new Student("Ravi", 23, 76);
student2.displayDetails(); 