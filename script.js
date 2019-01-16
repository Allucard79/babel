//zadanie pierwsze
const hello = 'Hello';
const world = 'World';

console.log(`${hello} ${world}`);

//zadanie drugie
const multiply = (a=1, b=1) => console.log(a*b);

multiply(2, 5);
multiply(6, 6);
multiply(5);

// zadanie trzecie
const average = (...numbers) =>  numbers.reduce((a, b) => a + b) / numbers.length;

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// zadanie czwarte
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// zadanie piąte
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = array;

console.log(`${firstName} ${lastName}`);

