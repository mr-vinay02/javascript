class Employee {

    constructor(name, age , role){
        this.name = name ;
        this.age = age ;
        this.role = role ;
    }

    work(){
        console.log( `${this.name} is working as a ${this.role}`);
    }
}


let emp1 = new Employee("Vinay" , 23 , "Softwaer Developer");

for(let key in emp1){
    console.log(emp1[key]);
}

emp1.work();

console.log(Object.keys(emp1));


console.table(Object.entries(emp1));


console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(emp1)));

console.log(Object.getPrototypeOf(emp1))

console.log(Reflect.ownKeys(emp1)); // only properties
console.log(Reflect.ownKeys(Object.getPrototypeOf(emp1))); // methods

console.log(JSON.stringify(emp1, null, 2));

