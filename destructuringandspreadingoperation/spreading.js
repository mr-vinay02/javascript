let arr1 = [1,2,3];
let arr2 = [4,5,6];


// combine two array
let combined = [ ...arr1 , ...arr2];

console.log(combined);


// copying
let copy = [ ...arr1];

console.log(copy);

// merging

let person = {
    name : "Vinay" ,
    age : 23
};

let details = {
    job : "Developer",
    address : "Bangalore Karnataka India"
};


let personDetails = {...person , ...details};
console.log(personDetails);