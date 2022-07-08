// Q17. Write a function to tell user if he/she is able to vote or not.( Consider minimum age of voting to 
// be 18. )


const user_input=require("readline-sync");
let age=user_input.questionInt("enter any age:-");
let eligible_for_vote=(age>=18)?
    ()=>console.log(age,"you are eligible for voting"):
    ()=>console.log(age,"you are not eligible for voting");
eligible_for_vote();
