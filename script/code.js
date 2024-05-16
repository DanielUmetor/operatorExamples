// Arthmetic operators: +, -, *, % (modulus), /, ** (exponent), ++, --
// let numb1 = 2, numb2 = 4, numb3 = 5
// console.log(numb1 + numb2 * numb3);
// console.log(numb3 % numb1);
// console.log(numb3 ** numb1)
// Assignment operators: =, += *=, /=, %=, etc...
// numb2 *= numb1
// numb2 = numb2 + numb1 
// console.log(numb2);
// Comparison operators: ==, <, >, <=, >=, !=, ===
// console.log(numb1 === numb2) // will check the value and the data type. 
// console.log(numb3 / numb1 > numb1);
// Logical operators: &&, ||, !
// let numb1 = 2, numb2 = 4, numb3 = 5 
// let addition = numb1 + numb2
// numb1 += numb2
// numb1 = numb1 + numb2
// console.log(typeof numb1);
// let obj1 = new Number(12)
// let myArr = new Array()
// myArr.push(12, 'Joel')
// console.log(`numb1: ${numb1}`);
// console.log(obj1 instanceof Array);
// console.log(numb2 == numb2 && numb3 < numb2);
// let firstName = 'Daniel'
// let lastName = 'Umetor'
// let person = {
   // firstName,lastName
//}
// console.log(person); // an object is a collection of variables.

// Type of operators: typeof and instanceof. // typeof will check the value and reveal the data type of the variable. //instanceof will check if an object was made from a particular class.
// Bitwise operators (Binary operators) : &, |, ~(XOR), << (left shift), >> (Right shift)
// console.log(2 | 3);
// Ternary operator
let numb1 = new Number(12)
console.log(numb1 instanceof Array ? `${numb1} is an object of Array` : `${numb1} is not an object of Array`); // when using a ternary operator, you must make use of 