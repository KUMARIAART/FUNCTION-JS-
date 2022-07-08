// Q44.Bonus - Given the same list, print the last ‘N’ elements in reverse order.
// Sample Input:
// 2
// Sample Output:
// q
// b 
// Sample Input:
// 3
// Sample Output:
// q
// b 
// 5

function last_element(list,n){
    for(var i=list.length-n;i<list.length;i++){
        console.log((list[i]).reverse());
    }
}
const user=require("readline-sync");
let n=user.questionInt("enter number for remove last element from the list:-");
last_element(["a", 1, "2", 5, "b", "q"],n);