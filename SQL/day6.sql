use employees;

select * from employees where salary >(select avg(salary) from employees);

select * from employees where salary=(select max(salary)from employees);

select * from employees where salary = (select min(salary ) from employees);

select * from employees where salary >(select avg(salary) from employees WHERE department_id = 10);


SELECT *FROM employees WHERE department_id IN (SELECT department_id FROM departments WHERE department_name IN ('IT', 'HR'));


SELECT *FROM employees WHERE department_id NOT IN (SELECT department_id FROM departments WHERE department_name = 'HR');