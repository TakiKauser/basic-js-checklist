// 1. write 3 variables (number, string, boolean)

let number = 9; // number
let string = "It's a string."; // string
let boolean = true; // boolean

// 2. variable using (let, const)

let items = 11;
const basket = 3;

items = 13; // can be updated (let)
//basket = 5; // can't be updated (const)

// 3. simple math operations (+, -, *, /, %)

let number1 = 9;
let number2 = 7;

const sum = number1 + number2;
console.log("Sum: ", sum);
const subtraction = number1 - number2;
console.log("Subtraction: ", subtraction);
const multiplication = number1 * number2;
console.log("Multiplication: ", multiplication);
const division = number1 / number2;
console.log("Division: ", division);
const remainder = number1 % number2;
console.log("Remainder: ", remainder);


// 4. comparision

if (number1 == number2){
    console.log("Equal!");
}
else if (number1 != number2){
    console.log("Not Equal!");
}
else if (number1 > number2){
    console.log("First Number is greater!");
}
else if (number1 < number2){
    console.log("Second Number is greater!");
}
else if (number1 >= number2){
    console.log("First Number is greater or equal!");
}
else if (number1 <= number2){
    console.log("Second Number is greater or equal!");
}

/* 
5. two condition. 
case1: fulfill both condition
case2: fulfill at least one condition 
*/

if ((typeof number1 == "number") && (typeof number2 == "number")){
    console.log("Both are number type variable!");
    // fulfilled both condition
}
if ((number1 % 3 == 0) || (number2 % 3 ==0)){
    console.log("Requirement fulfilled!");
    //fulfilled at least one condition
}

// 6. if-else

if (number1 < number2){
    console.log("Condition Passed!");
}
else {
    console.log("Condition Failed!");
}

// 7. odd numbers including 7 to 19 using while loop

let i = 7;
while (i <= 19){
    console.log(i);
    i+=2;
}

/*
  8. declare an array. 
  number of elements. 
  update 4th position element. 
  add or remove elements. 
  check element.
 */

const array1 = [0, 1, 1, 2, 3, 5, 8, 13, 21]; // array declared
const arrayLength1 = array1.length; //array elements counted
console.log("Length of first array: ", arrayLength1);

array1[3] = -2; // element updated
array1.push(34); // element added
array1.pop(); // element removed
console.log("First array updated! ", array1);

if (array1.indexOf(8) != -1){
    console.log("It's an element of the first array.");
    // elements checked
}

// 9. use any for loop to display the elements of an array

for (const element of array1){
    console.log(element);
}
/* 
for (let i = 0; i < array1.length; i++){
    console.log(array1[i]);
} 
*/

// 10. display only the numbers bigger than 80.

const array2 = [63, 67, 69, 78, 83, 94, 86, 73, 71, 0, 100];

for (const requiredNumber of array2){
    if (requiredNumber > 80){
        console.log(requiredNumber);
    }
}

 /* 
 11. write a function which takes three numbers and returns the
 multiplication of those numbers
*/

function numbersMultiplication(firstNumber, secondNumber, thirdNumber){
    const multipliedResult = firstNumber * secondNumber * thirdNumber;

    return multipliedResult;
}

const resultOfMultiplication = numbersMultiplication(3, 4, 5);
console.log("Multiplication result of three numbers using function is: ", resultOfMultiplication);

// 12. declare an object and change any property of that object

const laptop = {
    brand: "ASUS",
    hardDisc: "1 TB",
    ram: "8 GB",
    ssd: 0,
    processor: "core i5 8th gen",
    display: 15.5
};

laptop.ssd = "120 GB";

console.log(laptop);

// all the requirements are fulfilled
// basic javascript concept cleared!!!