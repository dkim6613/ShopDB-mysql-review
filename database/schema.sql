drop database if exists shopdb;

create database shopdb;
use shopdb;

create table inventory (
  id int auto_increment not null primary key,
  name varchar(255) not null,
  price int not null,
  quantity int not null
)