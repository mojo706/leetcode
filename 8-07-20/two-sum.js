/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = (nums, target) => {
//     for (let i = 0, len = nums.length; i<len; i++) {
//         for (let j = 0, lenj = nums.length; j<lenj; j++) {
//             if (j !== i && (nums[i] + nums[j]) === target) {
//                 return [i, j]
//             }
//         }
//     }
// }

var twoSum = function(nums, target) {
    const result = []
    for (num of nums) {
        let difference = target - num
        if (nums.indexOf(difference) !== -1) {
            result.push(nums.indexOf(difference))
        }
        if (result.length === 2) break
    }
    return result.sort((a,b) => a - b)};