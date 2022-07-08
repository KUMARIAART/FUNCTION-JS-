// Q8.Write a Python function that accepts a string and calculate the number of upper case letters and lower
// case letters. Go to the editor
// Sample String : 'The quick Brow Fox'
// Expected Output :
// No. of Uppercase characters : 3
// No. of Lower case Characters : 12

function count_Upp_Low_Char(string){
    let count_Upp_Char=0;
    let count_Low_Char=0;
    for(i of string){
        if(i>="A" && i<="Z"){
            count_Upp_Char+=1
        }
        else if(i>="a" && i<="z"){
            count_Low_Char+=1
        }
    }
    console.log("No. of Uppercase characters:-",count_Upp_Char);
    console.log("No. of Lower case Characters:-",count_Low_Char);
}
count_Upp_Low_Char('The quick Brow Fox');
