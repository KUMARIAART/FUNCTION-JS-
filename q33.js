// Q29. Write a function that returns the sum of multiples of 3 and 5 between 0 and limit (parameter). For 
// example, if limit is 20, it should return the sum of 3, 5, 6, 9, 10, 12, 15, 18, 20

function sum_of_multiples(number){
    let sum="";
    for(var i=0;i<=number;i++){
        if(i%3==0){
            sum+=i+","
        }
        else if(i%5==0){
            sum+=i+","
        }
    }
    return(sum);
}
const user_input=require("readline-sync");
let numbers=user_input.questionInt("enter any numbers:-");
console.log(sum_of_multiples(numbers));