function firstNonRepeating(str) {
    const charCount = {};

    // Count occurrences
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // if no unique character exists
}
console.log(firstNonRepeating("swissi")); 
