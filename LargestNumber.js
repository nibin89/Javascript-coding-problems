//solution 1
function findLargest(arr) {
    return Math.max(...arr);
}

//solution 2
function findLargest2(arr) {
    return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}


console.log(findLargest([3, 5, 7, 2, 8, 15, 50, 1])); // Output: 50