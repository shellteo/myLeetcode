/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n = nums.length;
    let result = [];
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            for (let k = j+1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let tempArr = [nums[i], nums[j], nums[k]].sort((a,b)=>{return a-b})
                    if(!result.find((a)=>{return a.toString() === tempArr.toString()})) {
                        result.push(tempArr)
                    }
                }
            }
        }
    }
    return result;
};

var threeSum2 = function(nums) {
    let result = []
    let n = nums.length;
    // 先排序
    nums = nums.sort((a,b) => {
        return a-b;
    })
    for (let i = 0; i < n; i++) {
        let j = i+1, k = n - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                if(!result.find((a)=>{return a.toString() === [nums[i], nums[j], nums[k]].toString()})) {
                    result.push([nums[i], nums[j], nums[k]])
                }
            }
            if (sum <= 0) {
                j++
            } else {
                k--
            }
        }
    }
    return result;
};
let nums = [-4,-5,-6,3,11,-13,3,14,1,-10,11,6,8,9,-6,-9,6,3,-15,-8,0,5,6,-8,14,-11,0,2,14,-15,14,-13,-5,-15,5,13,-13,-6,13,-4,-1,1,-13,14,-13,-12,-10,9,6,12,8,14,-5,-8,-9,-6,-4,-2,3,-5,-2,-6,-2,1,-5,-12,-1,-11,-11,-11,0,-4,-2,-5,-5,0,-2,-7,-14,-10,-10,10,-11,-8,-13,-13,1,-2,-7,11,8,6,-9,-9,14,1,-13,-9,-3,-9,-5,13,2,8,-7,13,-14,6,-9,-13,3,-12];
console.log(threeSum2(nums));
let nums2 = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums));