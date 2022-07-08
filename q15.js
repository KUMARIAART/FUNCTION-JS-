// Q4.Write a Python program to reverse a string.
// Sample String : "1234abcd"
// Output : "dcba4321".

function reverse(str){
    let string="";
    for(var i=str.length-1;i>=0;i--){
        string+=str[i]
    }
    console.log(string)
}
reverse("1234abcd");