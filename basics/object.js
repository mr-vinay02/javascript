let student = {
    name : "Vinay" ,
    age : 23 ,
    course : "Java Script"
};

for (let property in student ){
    console.log(property);
}

student.city = "Bengalore" ;

console.log(student);

delete student.age ;

console.log(student);