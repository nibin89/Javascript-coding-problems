function twoSum(nums, target) {
    const map = new Map(); // or {} for plain object
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if we've seen the complement before
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        // Store current number and its index
        map.set(nums[i], i);
    }
    
    return []; // No solution (though problem guarantees one exists)
}
twoSum([2,7,11,15], 6)
console.log(twoSum([2,7,11,15], 9))
