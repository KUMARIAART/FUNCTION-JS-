// Q49. Write a flowchart which takes an input N. Then input N numbers. Then for each of the N numbers, print
//  “even” if the number is even or and “odd” if the number is odd.
// Sample input:
// 7
// 1
// 4
// 23
// 95
// 1203
// 403
// 84
// Sample output:
// Odd
// Even
// Odd
// Odd
// Odd
// Odd
// Even
function check_odd_no(number){
    if(number%2!=0){
        console.log("odd");
    }
    else{
        console.log("even");
    }
}
const user_Input=require("readline-sync");
let number=user_Input.questionInt("enter any number:-");
check_odd_no(number);