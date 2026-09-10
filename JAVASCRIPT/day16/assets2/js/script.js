const employees = [];

function addEmployee() {
  const name = document.getElementById("empName").value;
  const dept = document.getElementById("dept").value;
  const salary = document.getElementById("salary").value;

  const employee = { name, dept, salary };
  employees.push(employee);

  const table = document.getElementById("empTable");
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Department</th>
      <th>Salary</th>
    </tr>
  `;

  employees.forEach(e => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${e.name}</td><td>${e.dept}</td><td>${e.salary}</td>`;
    table.appendChild(row);
  });
}