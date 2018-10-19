/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    nums.forEach(n=> {
        if(i<2 || n>nums[i-2]) {
            nums[i++] = n
        }
    })
    return i
};
let nums = [1,1,1,2,2,3];
console.log(removeDuplicates(nums),nums);
