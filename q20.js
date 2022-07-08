// Q9.Write a Python program to generate and print a list of first and last 5 elements where the values are 
// square of numbers between 1 and 30 (both included).
// Output :-([1, 4, 9, 16, 25], [676, 729, 784, 841, 900]).

function square_of_list(numbers){
    let list=[]
    for(var i=1;i<=numbers;i++){
        list.push(i)
    }
    let l1=[];
    let l2=[];
    for(var i=0;i<list.length;i++){
        if(i<=4){
            l1.push(list[i]**2)
        }
        else if(list.length-5<=i){
            l2.push(list[i]**2)
        }
    }
    console.log("(",l1,",",l2,")");
}
const user_input=require("readline-sync");
let numbers=user_input.questionInt("enter any number:-")
square_of_list(numbers);