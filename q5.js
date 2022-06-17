// Write a function named eligibleforvote which takes age as a parameter and prints if he/she 
// is eligible to vote or not. ( Consider minimum age of voting to be 18. )Example:
// If a user given age as less than 18 prints “not eligible “ or else if a user enters 18 or 
// more than 18 prints “you are eligible”.
// Input:
// 18
// 16
// Output :
// “you are eligible”
// “not eligible”

function eligibleforvote(age){
    if (voterage>=18){
        console.log("you are eligible for vote");
    }
    else{
        console.log("you are not eligible for vote");
    }
}
const user=require("readline-sync");
let voterage=user.questionInt("enter any age:-");
eligibleforvote(voterage);
