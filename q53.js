// Q50. Make a split function 
// Input :-[“i am anjali”]
// Output :- [‘i’,’am’,’anjali’]

function split_function(list1){
    let new_list=[];
    let str="";
    for(i in list1){
        if(list1[i]===" "){
            new_list.push(str);
            str=""
        }
        else if(i==(list1.length-1)){
            str+=list1[i]
            new_list.push(str)
        }
        else if(list1[i]!=" "){
            str+=list1[i]
        }
    }
    console.log(new_list);
}
split_function("i am anjali");