-- authors: Georgia Crouch
-- dates edited: 10/02/2021

drop table if exists studentDetails;

create table studentDetails(
    username VARCHAR(20) NOT NULL PRIMARY KEY UNIQUE,
    password VARCHAR(500) NOT NULL,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    DOB DATE,
    bio VARCHAR(300),
    studentNo VARCHAR(10) NOT NULL,
    moduleCode VARCHAR(10),
    quizAverage FLOAT,
    wellBeingScore FLOAT,
    supportCode INTEGER,
    friendList VARCHAR(400)
);

drop table if exists adminDetails;

create table adminDetails(
    username VARCHAR(20) NOT NULL PRIMARY KEY UNIQUE,
    password VARCHAR(500) NOT NULL,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    DOB DATE,
    bio VARCHAR(300),
    adminNo VARCHAR(10),
    moduleCode VARCHAR(10)
);

drop table if exists quizDetails;

create table quizDetails(
    quizID INTEGER NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    quizTitle VARCHAR(200) NOT NULL,
    quizContent VARCHAR(1000000) NOT NULL,
    quizRanking INTEGER NOT NULL
);
