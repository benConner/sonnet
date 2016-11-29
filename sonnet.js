// Take the contents of the sonnet div and place it in a variable
var theSonnet = document.getElementById("sonnet").innerHTML;
console.log(theSonnet);
// Find and output the starting position of the word "orphans"

console.log(theSonnet.indexOf("orphans"));
// Output the number of characters in the sonnet
console.log("number of characters " + theSonnet.length);
// Replace the first occurance of the string "winter" with "yuletide"
var winterReplace = theSonnet.replace("winter", "yuletide");
console.log(winterReplace);
// Replace all occurances of the string "the" with "a large"
var replaceAllThe = winterReplace.split(" the ").join(" a large ").split("The ").join("A large ");
console.log(replaceAllThe);
// Set the content of the sonnet div with the new 
document.getElementById("sonnet").innerHTML = replaceAllThe; 



