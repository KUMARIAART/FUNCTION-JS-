// JavaScript Recursion
// Find Factorial

// program to find the factorial of a number
// function factorial(x) {

//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// const num = 3;

// // calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }




// Defining function

// function sayHello(name) {
//     return "Hello " + name
// }
    
// console.log(sayHello("Pragna"))
    
// Output :
// Hello pragna



// function sayHello(name) {
//     return "Hello " + name
// }
// // Calling function
// console.log(sayHello("Pragna"))



// function sayBye(userName){
//     return "Bye"+" "+userName
// }
  
// console.log(sayBye("Kumar"))



// function getFullName(firstName,lastName){
// console.log(firstName+" "+lastName)
// }
    
// getFullName("kumar","nayak");
   
   

// function getFullName(firstName,lastName){
// console.log(firstName+" "+lastName)
// }
// GetFullName("kumar","nayak");
// ReferenceError: GetFullName is not defined

   

// Defining function
// function displaySum(num1, num2) {
// var total = num1 + num2;
// console.log(total);
// }
    
// // Calling function
// displaySum(6, 20); // 0utputs: 26
// displaySum(-5, 17); // 0utputs: 12
  


// Defining function

// function showFullname(firstName, lastName) {
// console.log(firstName + " " + lastName);
// }
// // Calling function
// showFullname("Kumar", "Nayak"); // 0utputs: Kumar Nayak
// showFullname("Shwetha"); // 0utputs: Shwetha undefined
   


// function displayMultiply(num1, num2, num3) {
//     return num1*num2*num3
// }
   
// console.log(displayMultiply(2, 3, 4));



// function getResult(num1,num2,num3,num4){
//     console.log(num1-num2+num3-num4)
// }
// getResult(2,3,4,5);



// function getResult(num1,num2,num3){
//     console.log(num1-num2+num3)
// }
// getResult(2,3,4,5);



// Defining function
// function getSum(num1, num2) {
// var total = num1 + num2;
// return total;
// }
// // Displaying returned value
// var result1 = getSum(6, 20);
// console.log(result1) // 0utputs: 26
// var result2 = getSum(-5, 17);
// console.log(result2) // 0utputs: 12
   


// Defining function
// function getSum(num1, num2) {
// var total = num1 + num2;
// return total;
// console.log("it won't prints this because return works like break");
// }
// // Displaying returned value
// var result1 = getSum(6, 20);
// console.log(result1) // 0utputs: 26
// var result2 = getSum(-5, 17);
// console.log(result2) // 0utputs: 12
   


// function insertingElement(arr){
//     var a=5;
//     arr.push(a);
//     return arr;
//     console.log(arr);
  
// }
// console.log(insertingElement([1,2,3,4]));
   


// // Defining function

// function greetWorld() {
//     var greet = "Hello World!";
//     console.log(greet);
// }
// greetWorld(); // Outputs: Hello World!
// console.log(greet); // Uncaught ReferenceError: greet is not defined



// var greet = "Hello World!";
// // Defining function
// function greetWorld() {
//   console.log(greet);
// }
// greetWorld();  // Outputs: Hello World!
// console.log(greet); // Outputs: Hello World!



// function myFunction(a, b) {
//     return a * b;
//    }
   
//    var x = myFunction(4, 3);