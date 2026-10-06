create database employees;
use employeES;

CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(20)
);

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    salary INT,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO departments VALUES
(10, 'IT'),
(20, 'HR'),
(30, 'Finance'),
(40, 'Marketing');



INSERT INTO employees VALUES
(1, 'Arun', 45000, 10),
(2, 'Bala', 35000, 20),
(3, 'Kumar', 55000, 10),
(4, 'Priya', 40000, 30);



SELECT employee_id,employee_name,salary,department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id; 