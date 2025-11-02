class Employee{
    constructor(name , age){
        this.name = name ;
        this.age = age ;
    }

    greet(){
        console.log(`Hi ${this.name} , Good job`);
    }
}

class Developer extends Employee{
    constructor(name, age , language){
        super(name , age);
        this.language = language;
    }

    code(){
        console.log(`${this.name} is coding in ${this.language}`);
    }
}


let developer = new Developer("vinay" , 23 , "java Script");

developer.greet();
developer.code();