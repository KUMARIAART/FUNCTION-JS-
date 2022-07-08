// Q13.Write a function to check if a number is even or not.

function check_no_even(number){
    if(number%2==0){
        console.log(number,"is a even number");
    }
}
const user_input=require("readline-sync");
let number=user_input.questionInt("enter any number:-")
check_no_even(number);
