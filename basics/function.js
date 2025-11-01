// Simple function

function greet() {
    console.log("Hi vinay") ;
}

greet() ;



// function with parameter

function greetUser(name){
    console.log( `Hi ${name} , Good morning `) ;
}

greetUser("vinay") ;

// function with the parameter and return 
function add( a , b){
    return a + b ;
}

let sum = add( 10 , 20);
console.log(sum) ;


// arrow function

const multiply =  (x , y) => { return x * y } ;


const value = multiply( 2 , 3 ) ;

console.log(value) ;