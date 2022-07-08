// Q48. Two numbers are entered through the keyboard. Write a flowchart to find the value of the first number
// raised to the power of another.
// Sample Input
// 3
// 4
// Sample Output
// 81 (3x3x3x3)

// Sample Input
// 5
// 3
// Sample Output 
// 125 (5x5x5)
// Sample Input
// 6
// 7
// Sample Output
// 279936 (6x6x6x6x6x6x6)

var anonymous_fuction=function xyz(number,power){
    let output=(number**power);
    console.log(output);
}
const user_input=require("readline-sync");
let number=user_input.questionInt("enter any number:-");
let power=user_input.questionInt("enter any number:-");
anonymous_fuction(number,power);
xyz(number,power);//it's gives refrence error:-xyz is not defined 