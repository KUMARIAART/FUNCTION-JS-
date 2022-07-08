// Q25. Given a list of numbers, write a Python program to count positive and negative numbers in a List 
// using function.
// Example:
// list1 = [2, -7, 5, -64, -14]
// Output: pos = 2, neg = 3


function count_pos_neg_no(list1){
    let count_negative_no=0;
    let count_positive_no=0;
    for(i of list1){
        if(i>=0)
        count_positive_no+=1
        else if(i<0){
            count_negative_no+=1
        }
    }
    console.log("positive numbers are:-",count_positive_no);
    console.log("negative numbers are:-",count_negative_no);
}
count_pos_neg_no([2, -7, 5, -64, -14]);