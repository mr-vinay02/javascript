function Employee(name , age , role) {
    this.name = name;
    this.age = age ;
    this.role = role ;

    this.work = function(){
        console.log(`${name} is working as ${role}`);
    },

    this.greet =  function(){
        console.log(`Hi ${name}`);
    }

};

let emp1 = new Employee("Vinay" , 22 , "software Developer");
emp1.greet();
emp1.work();


let emp2 = new Employee("ullas" , 23 , "tester");
emp2.work();