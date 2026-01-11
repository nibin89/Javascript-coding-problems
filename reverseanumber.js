
// function reverseNumber(num) {
//     let reversed = 0;
//     while (num > 0) {

//         reversed = reversed * 10 + (num % 10);
//         num = Math.floor(num / 10);

//     }

//     console.log(reversed);
        
// }

// reverseNumber(12345)

// Another logic
// const reversestring= (string) => {

//     return string.split('').reverse().join('')



// }


function reversestring(str) {

        let reversedString = '';

    for(let i=str.length-1; i>=0 ; i--){

         reversedString += str[i];
        

    }

    return reversedString;

}


console.log(reversestring("Hello"))
