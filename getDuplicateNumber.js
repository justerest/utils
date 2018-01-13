/**
 * Возвращает дублируемое число из набора натуральных чисел, отсортированный в порядке возрастания,
 * в который входят все числа из интервала [1, 2 ^ N - 1] (N - положительное целое), причём
 * каждое число, за исключением одного, встречается в наборе ровно 1 раз, а одно дублируется.
 *
 * @param  {number[]} arr
 * @return {number}
 */
export function getDuplicateNumber(arr) {
  const arrCopy = arr.slice();
  let offset = 0;

  while (arrCopy.length > 2) {
    const midpoint = arrCopy.length / 2;
    const middleEl = arrCopy[midpoint - 1];

    if (middleEl < midpoint + offset) {
      arrCopy.length = midpoint;
    }
    else {
      arrCopy.splice(0, midpoint);
      offset = middleEl;
    }
  }

  return arr[arr.length / 2 - 1];
}
