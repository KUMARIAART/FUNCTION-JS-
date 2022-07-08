// Q43.  Make a function given a list [‘a’, 1, ‘2’, 5, ‘b’, ‘q’]. Print the last ‘N’ elements of the given
// list. ‘N’ is accepted from the user.
// Sample Input:
// 1
// Sample Output:
// q 
// Sample Input:
// 3
// Sample Output:
// 5
// b 
// q

function last_element(list,n){
    for(var i=list.length-n;i<list.length;i++){
        console.log(list[i]);
    }
}
const user=require("readline-sync");
let n=user.questionInt("enter number for remove last element from the list:-");
last_element(["a", 1, "2", 5, "b", "q"],n);