let students = [
    { name: "Rithika", mark: 85 },
    { name: "Kavya", mark: 72 },
    { name: "Renita", mark: 91 },
    { name: "Pranathi", mark: 78 },
    { name: "Gobi", mark: 88 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].mark > 80) {
        console.log(students[i].name);
    }
}