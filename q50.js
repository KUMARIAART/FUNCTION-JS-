// arrow function.

// using arrow functions
// let x = (x, y) => x * y;


// Arrow Function with No Argument
// let greet = () => console.log('Hello');
// greet(); // Hello



// Arrow Function with One Argument
// let greet = x => console.log(x);
// greet('Hello'); // Hello 



// Arrow Function as an Expression
// let age = 5;

// let welcome = (age < 18) ?
//   () => console.log('Baby') :
//   () => console.log('Adult');

// welcome(); // Baby



// Multiline Arrow Functions
// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// let result1 = sum(5,7);
// console.log(result1); // 12


let find_name=(list)=>{
    const user_Input=require("readline-sync");
    let char=user_Input.question("enter any char:-");
    for(i in list){
        if(char===list[i][0])
        console.log(list[i]);
    }
}
find_name(["sheetal","aarti","tanuja","rupa","ashu","appi"])

