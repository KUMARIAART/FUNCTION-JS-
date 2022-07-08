// Q41. Write a Python program to find the list with maximum and minimum length.
// Original list:[[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]
// List with maximum length of lists:
// (3, [13, 15, 17])
// List with minimum length of lists:
// (1, [0])

function maximum_length(list){
    let count_max_len=list[0].length
    let max_list=list[0]
    let count_min_len=list[0].length
    let min_list=list[0];
    for(var i=0;i<list.length;i++){
        if(count_max_len<list[i].length){
            count_max_len=list[i].length
            max_list=list[i]
        }
        else if(count_min_len>list[i].length){
            count_min_len=list[i].length
            min_list=list[i]
        }
    }
    console.log(count_max_len,max_list);
    console.log(count_min_len,min_list);
}
maximum_length([[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]);