// Q26. Write a function called fizz_buzz that takes a number.
// If the number is divisible by 3, it should return “Fizz”.
// If it is divisible by 5, it should return “Buzz”.
// If it is divisible by both 3 and 5, it should return “FizzBuzz”.
// Otherwise, it should return the same number.

function fizz_buzz(number){
    if(number%3==0 && number%5==0){
        return("fizzbuzz");
    }
    else if(number%3==0){
        return("fizz");
    }
    else if(number%5==0){
        return("buzz");
    }
}
const user_input=require("readline-sync");
let number=user_input.questionInt("enter any number:-");
console.log(fizz_buzz(number));