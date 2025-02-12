/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums = [], val) {
    let left = 0
    let right = nums.length - 1
    let tmp
    while (left <= right) {
        if (nums[left] === val) {
            if (nums[right] !== val) {
                // switch position
                tmp = nums[left]
                nums[left] = nums[right]
                nums[right] = tmp
            } else {
                right -= 1
            }
        } else {
            left += 1
        }
    }
    return left;
};