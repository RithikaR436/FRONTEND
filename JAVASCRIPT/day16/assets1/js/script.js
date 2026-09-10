const students = [];

function addStudent() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const city = document.getElementById("city").value;

  const student = { name, age, city };
  students.push(student);

  const list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach(s=> {
    const div = document.createElement("div");
    div.textContent = s.name + " - " + s.age + " - " + s.city;
    list.appendChild(div);
  });
}