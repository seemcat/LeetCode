const twoSum = (nums, target) => {
  /* Problem Solving Flow */
  // target - currVal = firstDiff
  // Look for that firstDiff in the array
  // If it exists, then return [idxOfCurrVal, idxOfFirstDiff]
  // Because currVal + firstDiff = target.
  // Check if firstDiff and currVal has the same idx.

  let i = 0;
  while (nums.length != i) {
    let firstDiff = target - nums[i];
    if (nums.includes(firstDiff) && nums.indexOf(firstDiff) !== i) {
      return [nums.indexOf(firstDiff), i];
    }
    i++;
  }
};

module.exports = twoSum;
