create database myschool;
set sql_safe_updates=0;
use myschool;
create table student(
studentid int primary key auto_increment,
studentname varchar(20),
studentage int,
studentdepartment varchar(20),
studentcity varchar(20)
);
insert into student(studentname,studentage,studentdepartment,studentcity) values("Ravi",22,"CSE","Chennai");
insert into student(studentname,studentage,studentdepartment,studentcity) values("Arun",23,"IT","Mathurai");
insert into student(studentname,studentage,studentdepartment,studentcity) values("Bala",21,"ECE","Chennai");
insert into student(studentname,studentage,studentdepartment,studentcity) values("Priya",24,"CSE","Coimbatore");

update student set studentcity="Bangalore" where studentid=2;

update student set studentage = 25 where studentid=3;

update student set studentage = 20 ,studentdepartment ="IT",studentcity ="Chennai" where studentid=1;

update student set studentcity = "Mathurai" where studentdepartment="CSE";
	
delete from student where studentid=4; 

delete from student where studentcity="selam" ; 

update student set studentcity="Hyderabad" where studentid=2;

SELECT  studentid ,studentname ,studentcity , updated_at FROM student WHERE id = 2;

ALTER TABLE student
ADD COLUMN updated_at TIMESTAMP
DEFAULT CURRENT_TIMESTAMP
ON UPDATE CURRENT_TIMESTAMP;


SELECT  studentid ,studentname ,studentcity , updated_at FROM student WHERE studentid = 2;

UPDATE student SET studentcity = 'Hyderabad' WHERE studentid = 2;

insert into student(studentname,studentage,studentdepartment,studentcity) values("Rithika",20,"JS","Thanjavur");


insert into student(studentname,studentage,studentdepartment,studentcity) values("Pranathi",20,"JS","Thanjavur"),("Kavya",25,"DA","Trichy");


update student set studentcity="Kerala" where studentid=1;


update student set studentage="22", studentdepartment="SAP" where studentid=2;


delete from student where studentid=3;
