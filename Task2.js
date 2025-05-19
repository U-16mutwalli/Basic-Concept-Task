//Concepts: Functions, Arrays, Strings, Scope
//Tasks:
//1.Write a function to reverse a string.

function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

//2.Create a function to find the second largest number in an array.
function secondLargest(arr){
    let uniqueArr=[...new Set(arr)];
    uniqueArr.sort((a,b)=>b-a);
    return uniqueArr[1];
}
console.log(secondLargest([3,5,1,8,2]));

//3.Create a function to capitalize the first letter of each word in a sentence.

function capitalizeFirstLetter(sentence){
    return sentence.split(' ').map(word =>word.charAt(0).toUpperCase() + word.slice(1)) .join('');
}
console.log(capitalizeFirstLetter("hello world"));


//4.Implement a palindrome checker function.

function isPalindrome(str){
    const cleanedStr   =str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));