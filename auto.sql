CREATE DATABASE auto;
    DEFAULT CHARACTER SET = 'utf8mb4';
    use auto;


create table carro(
    id int AUTO_INCREMENT NOT null,
    marca varchar(100) null,
    modelo varchar(100) null,
    primary key(id)
);

insert into carro VALUES
(1,'VW','gol'),
(2,'Ferrari','F50'),
(3,'Porsche','911'); 
SELECT * from carro;