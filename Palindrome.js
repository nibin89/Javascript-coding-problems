

let isPalindrome = (str) => {

    let reversestr = "";

    for(let i=str.length-1; i>=0; i--) {
        reversestr+= str[i];
    }

    let result = reversestr.toLowerCase() === str.toLowerCase();

    if(result){

        return "The String " + str + " is Palindrome";
    }

    else {
        return "The String " + str + " is not Palindrome";
    }

}


console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Jonu")); // false