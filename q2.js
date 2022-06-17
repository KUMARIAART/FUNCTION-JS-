//JavaScript Variable Scope
//Global Scope

// // program to print a text 
// let a = "hello";

// function greet () {
//     console.log(a);
// }

// greet(); // hello



// The value of a global variable can be changed inside a function. For example,

// program to show the change in global variable
// let a = "hello";

// function greet() {
//     a = 3;
// }

// // before the function call
// console.log(a);

// //after the function call
// greet();
// console.log(a); // 3



// In JavaScript, a variable can also be used without declaring it. If a variable is used 
// without declaring it, that variable automatically becomes a global variable.For example,

// function greet() {
//     a = "hello"
// }

// greet();

// console.log(a); // hello



// Local Scope

// program showing local scope of a variable
// let a = "hello";

// function greet() {
//     let b = "World"
//     console.log(a + b);
// }

// greet();
// console.log(a + b); // error



// block-scoped Variable

// program showing block-scoped concept
// global variable
// let a = 'Hello';

// function greet() {

//     // local variable
//     let b = 'World';

//     console.log(a + ' ' + b);

//     if (b == 'World') {

//         // block-scoped variable
//         let c = 'hello';

//         console.log(a + ' ' + b + ' ' + c);
//     }

//     // variable c cannot be accessed here
//     console.log(a + ' ' + b + ' ' + c);
// }

// greet();



