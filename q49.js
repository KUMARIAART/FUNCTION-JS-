// Q46. Draw a flowchart to take a list of N numbers from the user, print True if the complete list 
// consists of consecutive numbers with a difference of one. Print False otherwise. 
// Sample Input:
// 1 2 3 4 5 6 7
// Sample Output:
// True
// Sample Input:
// 45 46 47 48 49 51 52
// Sample Output:
// False
// Sample Input:
// 4 5 6 7 8 9 10
// Sample Output:
// True

// Sample Input:
// -5 -6 -7 -8

// Sample Output:
// False
// Sample Input:
// -3 -2 -1 0 1
// Sample Output:
// True

function consecutive_numbers(number1){
    let new_list=[];
    for(var i=0;i<number1;i++){
        let number2=user_input.questionInt("enter numbers:-")
        new_list.push(number2);
    }
    console.log(new_list);

    let sum=0;
    for(i of new_list){
        sum+=i
    if(sum%2==0){
        console.log("true");
    }
    else{
        console.log("false");
    }
    }
}
const user_input=require("readline-sync");
let number1=user_input.questionInt("enter how many numbers you want in list:-");
consecutive_numbers(number1);