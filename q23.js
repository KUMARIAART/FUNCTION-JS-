// Q12.Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function remove_zeros(number){
    for(var i=number;number>0;i=Math.floor(i/10)){
        var a=i%10
        if(a != 0){
            return(i);
        }
    }
}
const input=require("readline-sync");
let number=input.questionInt("enter any number:-");
console.log(remove_zeros(number));
