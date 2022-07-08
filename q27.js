// Q16.Print multiplication table of 12 using function.

function table(number){
    for(var i=1;i<=10;i++){
        console.log(number,"*",i,"=",number*i);
    }
}
const user_input=require("readline-sync");
let number=user_input.questionInt("enter any number:-");
table(number);