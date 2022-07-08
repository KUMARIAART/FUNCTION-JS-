// Q15.Write a function to calculate power of a number raised to other ( ab ) .

function power_of_number(a,b){
    let exponent=(a**b)
    console.log(exponent)
}
const user_input=require("readline-sync");
let Number=user_input.questionInt("enter any number:-");
let power=user_input.questionInt("enter any number:-");
power_of_number(Number,power)

