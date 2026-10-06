create database institudedb;
use institudedb;
create table students(
student_id  int primary key auto_increment,
student_name varchar(20)
);
create table courses (
course_id  int primary key auto_increment,
course_name varchar (20)
);
create table trainers(
trainer_id int primary key auto_increment,
trainer_name varchar(20)


);

insert into students(student_name) values("Ravi");
insert into students(student_name) values ("Ravi");
insert into students(student_name) values("Karthik");
insert into students(student_name) values("Ravi");
insert into students(student_name) values("Karthik");



insert into courses(course_name) values ("Java");
insert into courses(course_name) values ("Java");
insert into courses(course_name) values ("Python");
insert into courses(course_name) values ("Java");



insert into trainers(trainer_name) values ("Arun");
insert into trainers(trainer_name) values ("Bala");
insert into trainers(trainer_name) values ("Kumar");
insert into trainers(trainer_name) values ("Priya");
insert into trainers(trainer_name) values ("Divya");




