// Q27. Write a function for checking the speed of drivers. This function should have one parameter: speed.
// If speed is less than 70, it should print “Ok”.
// Otherwise, for every 5km above the speed limit (70), it should give the driver one demerit point and print
// the total number of demerit points. For example, if the speed is 80, it should print: “Points: 2”.
// If the driver gets more than 12 points, the function should print: “License suspended”

function speed_of_drive(speed){
    let point=0;
    if(speed<=70){
        console.log("ok");
    }
    else if(speed>70){
        for(i=71;i<=speed;i+=5){
            point+=1
        }
        if(point>12){
            console.log("License suspended");
        }
        else{
            console.log(point)
        }
    }
}
const user_Input=require("readline-sync");
let speed=user_Input.questionInt("enter speed:-");
speed_of_drive(speed);
