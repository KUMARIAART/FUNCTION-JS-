// Q28. Write a function called showNumbers that takes a parameter called limit. It should print all the 
// numbers between 0 and limit with a label to identify the even and odd numbers. For example, if the limit
// is 3, it should print: - 0 even,1 odd, 2 even, 3 odd .

function showNumbers(limit){
    var i=0;
    do{
        i++
        if(i%2==0){
            console.log(i,"even");
        }
        else{
            console.log(i,"odd");
        }
    }while(i<numbers);
}
const user_input=require("readline-sync");
let numbers=user_input.questionInt("enter any numbers:-");
showNumbers(numbers);