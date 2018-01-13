/**
 * Возвращает дублируемое число из набора натуральных чисел, отсортированный в порядке возрастания,
 * в который входят все числа из интервала [1, 2 ^ N - 1] (N - положительное целое), причём
 * каждое число, за исключением одного, встречается в наборе ровно 1 раз, а одно дублируется.
 *
 * @param  {number[]} arr
 * @return {number}
 */
module.exports = function getDuplicateNumber(arr) {
  let offset = 0;

  while (arr.length > 2) {
    const mid = arr.length / 2;
    const midEl = arr[mid - 1];

    if (midEl < mid + offset) {
      arr = arr.slice(0, mid);
    }
    else {
      arr = arr.slice(mid, Infinity);
      offset = midEl;
    }
  }

  return arr[0];
};
