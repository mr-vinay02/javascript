let person = {
    name : "vinay",
    age : 23 ,
    job : "Developer"
};

let {name , age , job} = person;

let personName = person.name;
let personAge = person.age;
let personJob = person.job;

console.log(personName , personAge , personJob);

// let person1 = { name: "Vinay", age: 23, job: "Software Developer" };

// let { name: Name, age: Age, job: JOb } = person1;

// console.log(Name, Age, JOb);


let { name: fullName  , age: personage  , job: JobDescription } = person ;
console.log( name  , age , job);

console.log(fullName , personage , JobDescription);


let student = {
    studentName : "vinay",
    studentAge : 23 ,
    studentAddress : {
        area : "HRS layout",
        city : "Bengalore",
    }
};

let {studentName , studentAge , studentAddress : {area,city} } = student;

console.log(studentName , studentAge , area , city);