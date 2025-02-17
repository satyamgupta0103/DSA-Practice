/**
 * @param {number[]} nums
 * @return {boolean}
 */

//1st Approach Using Map - O(n)
var containsDuplicate = function (nums) {
  const map = new Map();

  for (const n of nums) {
    if (map.has(n)) {
      return true;
    }
    map.set(n, true);
  }

  return false;
};

//2nd Approach Using Set - O(n)
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
};
