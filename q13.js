// Q2.Write a Python function to find the Max of three numbers.

function max(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(num1,"is a max number");
    }
    else if(num2>num1 && num2>num3){
        console.log(num2,"is a max number");
    }
    else{
        console.log(num3,"is a max number");
    }

}
const user_input=require("readline-sync");
let number1=user_input.questionInt("enter first number:-");
let number2=user_input.questionInt("enter second number:-");
let number3=user_input.questionInt("enter third number:-");
max(number1,number2,number3);

