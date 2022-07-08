// Q10.Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum
// (also as a string):
//If either input is an empty string, consider it as zero.

// "4",  "5" --> "9"
// "34", "5" --> "39"
// Notes:

function sum_of_str(num1,num2){
    let convert1=Number(num1)+Number(num2)
    let convert2=String(convert1)
    console.log(convert2);
}
const user_input=require("readline-sync");
let number1=user_input.question("enter first number:-");
let number2=user_input.question("enter second number:-");
sum_of_str(number1,number2);