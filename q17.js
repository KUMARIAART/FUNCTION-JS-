// Q6.Write a Python program to print the even numbers from a given list.
// Sample List : [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Expected Result : [2, 4, 6, 8].

function even_numbers(list){
    let new_list=[];
    for(i of list){
        if(i%2==0){
            new_list.push(i)
        }
    }
    console.log(new_list);
}
even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);