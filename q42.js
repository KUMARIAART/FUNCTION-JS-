// Q39. Your task is to make two functions, max and min (maximum and minimum in PHP and Python, maxi and 
// mini in Julia) that take a(n) array/vector of integers list as input and outputs, respectively, the
//  largest and lowest number in that array/vector.
// #Examples:-

// maximun([4,6,2,1,9,63,-134,566]) returns 566
// minimun([-52, 56, 30, 29, -54, 0, -110]) returns -110
// maximun([5]) returns 5.

// minimun([42, 54, 65, 87, 0]) returns 0.

function maximum(list1){
    let list2=[];
    for(var i=0;i<list1;i++){
        let number2=user_Input.questionInt("enter numbers for creat a list:-");
        list2.push(number2)    
    }
    console.log(list2)

    let max_no=list2[0];
    let min_no=list2[0];
    for(i of list2){
        if(max_no<i){
            max_no=i
        }
        else if(min_no>i){
            min_no=i
        }
    }
    console.log(max_no);
    console.log(min_no);

}
const user_Input=require("readline-sync");
let number1=user_Input.questionInt("enter number for user input:-");
maximum(number1)
