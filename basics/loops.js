// for loop

for (let i =0 ; i <= 5 ; i++){
    console.log(i );
}

// while loop

let i = 0 ;
while( i <= 5){
    console.log(i);
    i++;
}


// do while loop
i = 0 ;
do{
    console.log(i);
    i++;
}while( i <= 5 );

// for...in loop

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// for...of loop
const colors = ["red", "green", "blue"];

for(let color of colors){
    console.log(color);
}
