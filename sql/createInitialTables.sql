--authors: Georgia Crouch
--dates edited: 11/02/2021

drop table if exists StudentDetails;

create table StudentDetails(
    Username VARCHAR(20) NOT NULL PRIMARY KEY UNIQUE,
    Password VARCHAR(500) NOT NULL,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    DOB DATE,
    Bio VARCHAR(300),
    StudentNo VARCHAR(10) NOT NULL,
    CourseCode VARCHAR(10),
    QuizAverage FLOAT,
    WellBeingScore FLOAT,
    SupportCode INTEGER,
    FriendList VARCHAR(400),
    FOREIGN KEY (CourseCode) REFERENCES CourseDetails (CourseCode)
);

drop table if exists AdminDetails;

create table AdminDetails(
    Username VARCHAR(20) NOT NULL PRIMARY KEY UNIQUE,
    Password VARCHAR(500) NOT NULL,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    DOB DATE,
    Bio VARCHAR(300),
    AdminNo VARCHAR(10),
    ModuleCode VARCHAR(10),
    FOREIGN KEY (ModuleCode) REFERENCES ModuleDetails (ModuleCode)
);

drop table if exists QuizDetails;

create table QuizDetails(
    QuizID INTEGER NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    QuizTitle VARCHAR(200) NOT NULL,
    QuizContent VARCHAR(1000000) NOT NULL,
    QuizRanking INTEGER NOT NULL,
    Category String NOT NULL,
    FOREIGN KEY Category REFERENCES ModuleDetails (moduleCode) 
);

drop table if exists CourseDetails;

create table CourseDetails(
    CourseCode VARCHAR(30) PRIMARY KEY UNIQUE,
    CourseDescription VARCHAR(300)
);

drop table if exists ModuleDetails;

create table ModuleDetails(
    ModuleCode VARCHAR(10) PRIMARY KEY NOT NULL UNIQUE,
    ModuleTitle VARCHAR(50),
    ModuleDescription VARCHAR(300),
    CourseCode VARCHAR(30),
    FOREIGN KEY CourseCode REFERENCES CourseDetails (CourseCode)
);
