// Created by wxc on 2019/12/05
// Updated on 2019/12/10

// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，
// 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

// 注意：
// 答案中不可以包含重复的四元组。

// 示例：
// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
// 满足要求的四元组集合为：
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

// LeetCode@aditya sui
// time: 136ms(41.42%) memory: 37.2MB(40.31%)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];
    const len = nums.length;
    if (len < 4 || nums == null) return res;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < len; i++) {
        if (nums[i] == nums[i - 1]) continue;// 去重
        for (let j = len - 1; j > i + 1; j--) {
            if (nums[j] == nums[j + 1]) continue;
            let left = i + 1;
            let right = j - 1;

            while(left < right) {
                const sum = nums[i] + nums[left] + nums[right] + nums[j];

                if (sum == target) {
                    res.push([nums[i], nums[left], nums[right], nums[j]]);
                    while(left < right && nums[left] == nums[left + 1]) left++;
                    while(left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                }
            }
        }
    }
    return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));