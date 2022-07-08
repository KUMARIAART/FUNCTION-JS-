// Q34. Write a function which converts the input string to uppercase.
// Write a function which converts the input string to uppercase.
// For example:-
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function convert_str_to_upper(number,list){
    let input=number;
    for(i of list){
        for(j of list){
            if(i+j===input){
                console.log(i,"+",j);
            }
        }

    }


}
const user=require("readline-sync");
let number=user.questionInt("enter any number:-");
convert_str_to_upper(number,[10, 14, 2, 23, 19]);