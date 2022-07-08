// Q30. Write a function that prints all the prime numbers between 0 and limit where limit is a parameter.

function prime_no(limit){
    for(var i=0;i<=limit;i++){
        let count=0;
        for(var j=1;j<=i;j++){
            if(i%j==0){
                count+=1
            }

        }
        if(count===2){
            console.log(i,"is a prime numbers");
        }
    }
}
const user_Input=require("readline-sync");
let number=user_Input.questionInt("enter any number:-");
prime_no(number);