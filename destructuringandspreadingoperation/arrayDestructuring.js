let array = new Array();

array.push(45);
array.push(78);
array.unshift(29);

// array destructuring
let a = array[0];
let b = array[1];
let c = array[2];

console.log(a , b , c);

// or 

let [x  , y , z] = [10 ,20,30];

console.log(x , y , z);

let [p, , q] = [10,20,30];
console.log(p , q);

// using default values
let[ e , f = 56 , g = 100] = [10, 20 ];
console.log(e , f, g);