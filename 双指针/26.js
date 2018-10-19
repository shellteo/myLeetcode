/**
 * @param {number[]} nums, 排序数组
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    nums.forEach(n=> {
        if(i<1 || n>nums[i-1]) {
            nums[i++] = n
        }
    })
    return i
};
var removeDuplicates2= function (nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}