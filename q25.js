// Q14.Write a function to check if a number is prime or not.

function check_no_prime(number){
    let count=0;
    for(var i=0;i<=number;i++){
        if(number%i==0){
            count+=1
        }
    }
    if(count===2){
        console.log(number,"this is a prime number");
    }
    else{
        console.log(number,"this is not a prime number");
    }
}
const user_input=require("readline-sync");
let number=user_input.questionInt("enter any number:-")
check_no_prime(number);