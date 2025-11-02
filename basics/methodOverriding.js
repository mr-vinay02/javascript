class Employee{

    constructor(name ,age){
        this.name = name;
        this.age = age;
    }

    work(){
        console.log(`${this.name} is doing the general tasks`);
    }
}

class Developer extends Employee{
    constructor(name , age ,language){
        super(name ,age);
        this.language = language;
    }

    work(){
        super.work();
        console.log(`${this.name} is coding in ${this.language}`);
    }    
}

let developer = new Developer("vinay" , 23 , "Java");

developer.work();