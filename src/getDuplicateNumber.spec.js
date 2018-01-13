/* eslint-env jest */

const getDuplicateNumber = require('./getDuplicateNumber');
const randomInt = require('./randomInt');

const N = Math.pow(2, 26);
const duplicate = randomInt(1, N - 1);

const ARRAY = [];
for (let i = 1; i < N; i++) ARRAY.push(i);
ARRAY.splice(duplicate, 0, duplicate);

test(`array.length = ${N}, x = ${duplicate}`, () => {
  expect(getDuplicateNumber(ARRAY)).toBe(duplicate);
  expect(ARRAY.length).toBe(N);
});
