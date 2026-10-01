create database mydb;
use mydb;
create table employee(
employeid int primary key auto_increment,
employeename varchar(20),
employenumber varchar(20),
employedepartment varchar(20),
employeejoindate date,
employerole varchar(20) default "Admin",
employeemail varchar(20) unique
);

create table Governmant (
govworkerid int primary key auto_increment,
govworkername varchar(20),
govworkernumber varchar(20),
govworkerdepartment varchar(20),
govworkerjoindate date,
govworkerrole varchar(20) default "Admin",
govworkeremail varchar(20) unique
);


create table Product (
productid int primary key auto_increment,
productname varchar(20),
productnumber varchar(20),
productprice int,
productdate date,
productstaff varchar(20) default "Admin",
productmail varchar(20) unique
);