let employee = {
    name : "Vinay" ,
    age : 23 ,
    salary : 50000,
    experience : "fresher",
    role : "Software developer",

    greet : function(){
        console.log(`Hi ${this.name} , you are a good developer`);
    },


    work : function(){
        console.log(`${this.name} is working as a ${this.role}`);
    }
};


employee.greet();
employee.work();