var search = function(nums, target) {
    // Set.has() returns true if value is in the set 
    return new Set(nums).has(target)
};