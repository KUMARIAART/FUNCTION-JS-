// Q7.Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight,height){
    let bmi1=(weight/height)
        if(bmi1<=18.5){
            return("Underweight");
        }
        else if(bmi1<=25.0){
            return("normal");
        }
        else if(bmi1<=30.0){
            return("Overweight");
        }
        else if(bmi1>30){
            return("Obese");
        }
    
}
const user_input=require("readline-sync");
let weight1=user_input.questionInt("enter your weight:-");
let height1=user_input.questionInt("enter your height:-");
console.log(bmi(weight1,height1));

