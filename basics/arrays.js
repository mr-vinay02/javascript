let numbers = [];

numbers.push(56);
numbers.push(78);
numbers.unshift(93);
numbers.unshift(45);
numbers.push(45);

console.log(numbers)

numbers.pop();

console.log(numbers.includes(90)) ;

console.log(numbers)

console.log(numbers.length)

let inline = " ";
for(let number of numbers)
{
    inline += number + " " ;
}

console.log(inline)


let double = numbers.map(m => m * 2);
console.log(double);

let odds = numbers.filter(m => m % 2 == 0);
console.log(odds);

let sum = numbers.reduce((m, sum) =>  sum + m , 0);
console.log(sum);


numbers.shift();
console.log(numbers);

for(let number of numbers)
{
    console.log(number);
}
