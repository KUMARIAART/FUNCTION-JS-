// Write a function named checknumberslist which takes two lists of integers and checks the 
// numbers of the same index numbers whether they both are even or not. For checking both even
// or not you can use the function written in the previous question.
// If you give these lists [2, 6, 18, 10, 3, 75] and [6, 19, 24, 12, 3, 87] then the output 
// should come like this.dono even hain


function checknumberslist(list1,list2){
    for(i in list1){
        if(list1[i]%2==0 && list2[i]%2==0){
            console.log("dono even hain");
        }
        else{
            console.log("dono even nhi hain")
        }    
    }

}
checknumberslist([2, 6, 18, 10, 3, 75], [6, 19, 24, 12, 3, 87]);
