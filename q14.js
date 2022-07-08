// Q3.Write a Python function to sum all the numbers in a list.
// Sample List : (8, 2, 3, 0, 7)
// Output : 20.

function sum(list){
    var sum1=0;
    for(i in list){
        sum1+=list[i]
    }
    console.log(sum1);
}
sum([8, 2, 3, 0, 7]);