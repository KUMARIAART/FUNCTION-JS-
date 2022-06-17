// Write a function that takes 2 strings as parameters and prints whose length is bigger, 
// if both lengths are equal print two strings.
// Hint :Use len() builtin function.
// Input:
// isequallenth(“hello”,”welcome”)
// isequallenth(“sonu”,”monu”)
// Output :
// welcome 
// sonu
// monu 

function is_equal_lenth(str1,str2){
    if(str1.length === str2.length){
        console.log(str1);
        console.log(str2);
    }
    else if(str1.length > str2.length){
        console.log(str1);
    }
    else{
        console.log(str2);
    }
}
const user=require("readline-sync");
let s1=user.question("enter any string:-");
let s2=user.question("enter any string:-");
is_equal_lenth(s1,s2);

