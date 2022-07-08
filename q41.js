// Q38. Your task is to create function is Divided By (or is_divide_by) to check if an integer number is 
// divisible by each out of two arguments.
// A few cases:
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false
// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true
// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function is_divide_by(num1,num2,list){
    for(var i=0;i<list.length;i++){
        if(list[i]%num1==0 && list[i]%num2==0){
            console.log("true")
        }
        else{
            console.log("false");

        }
    }
}
const user_input=require("readline-sync");
let number1=user_input.questionInt("enter first number:-");
let number2=user_input.questionInt("enter second number:-");
is_divide_by(number1,number2,[-12,2,-6]);