// Q40. Write a function For example, if we give 9119  the function should return  811181, as the  square of
// 9 is 81 and square of 1  is 1.

(function square_of_no(numbers){
    let str="";
    for(var i=0;i<numbers.length;i++){
        let power=numbers[i]*numbers[i]
        str+=power
    }
    console.log(str);
})("9119");