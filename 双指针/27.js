/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if(nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};
let arr = [0,1,2,2,3,0,4,2];
console.log(removeElement(arr, 2), arr);

var removeElement2 = function(nums, val) {
    let j = 0;
    while(j < nums.length) {
        if(nums[j] === val) {
            nums.splice(j,1);
        } else {
            j++;
        }
    }
    return nums.length;
};
//console.log(removeElement2(arr, 2), arr);