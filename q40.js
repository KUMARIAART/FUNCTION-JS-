// Q37. Consider an array/list of sheep where some sheep may be missing from their place. We need a 
// function that counts the number of sheep present in the array (true means present).

// For example,
// [True,  True,  True,  False,
// True,  True,  True,  True ,
// True,  False, True,  False,
// True,  False, False, True ,
// True,  True,  True,  True ,
// False, False, True,  True]

// The correct answer would be 17.Hint: Don't forget to check for bad values like null/undefined.

function count_present_sheep(list){
    let count=0;
    for(i of list){
        if(i===true){
            count+=1
        }
    }
    console.log(count);
}
count_present_sheep([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
    );