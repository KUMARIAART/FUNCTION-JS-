// Q42. Find the sum of number digits in List.
// The original list is : [12, 67, 98, 34]
// List Integer Summation : [3, 13, 17, 7]
// Explanation: 1+2 = 3, 6+7=13, 9+8=17, 3+4=7
// The original list is : [15, 81, 11, 234]

function sum_of_no(list){
    let new_list=[];
    for(i of list){
        let sum=0;
        for(var j=i;j>0;j=Math.floor(j/10)){
            let a=j%10
            sum+=a
        }
        new_list.push(sum)
    }
    console.log(new_list);
}
sum_of_no([12, 67, 98, 34]);