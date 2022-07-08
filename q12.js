// Q1.Write a Python program to count the number of strings where the string length is 2 or more and the
// first and last characters are the same from a given list of strings.
// list=['abc', 'xyz', 'aba', '1221']
// result= 2.

function str_length(list){
    let count=0;
    for(i of list){
        if(i[0]==i[i.length-1]){
            count+=1
        }
    }
    console.log(count);
}
str_length(['abc', 'xyz', 'aba', '1221'])
