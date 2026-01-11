//Input: [101, 205, 101, 303, 205, 404]


function removeDuplicates(arr) {

        
    return [...new Set(arr)];

        
}
console.log(removeDuplicates([101, 205, 101, 303, 205, 404])) // Output: [101, 205, 303, 404]