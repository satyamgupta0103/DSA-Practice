/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Using Map - O(n)
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
