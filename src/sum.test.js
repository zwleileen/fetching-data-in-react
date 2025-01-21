import { expect, test } from "vitest";

/*-----------------------------------------------------------------------------
Challenge: 12-hammingDistance
Difficulty: Intermediate
Prompt:
In information theory, the hamming distance refers to the count of the
differences between two strings of equal length. It is used in computer science
for such things as implementing a "fuzzy search" capability.
- Write a function named hammingDistance that accepts two arguments, which are
  both strings of equal length.
- The function should return the count of the symbols (characters, numbers,
  etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.
Examples:
hammingDistance('abc', 'abc') //=> 0
hammingDistance('a1c', 'a2c') //=> 1
hammingDistance('!!!!', '****') //=> 4
hammingDistance('abc', 'ab') //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:

const hammingDistance = (x, y) => {
  if (x === y) {
    return 0;
  }

  if (x.length !== y.length) {
    return NaN;
  }

  return ["1", "2"];
};

test("same same", () => {
  const result = hammingDistance("abc", "abc");

  expect(result).toBe(0);
});

test("not same length", () => {
  const result = hammingDistance("abc", "ab");

  expect(result).toBe(NaN);
});

test("1 diff", () => {
  const result = hammingDistance("a1c", "a2c");

  expect(result).toEqual(["1", "2"]);
});

test("all diff", () => {
  const result = hammingDistance("!!!", "aaa");

  expect(result).toBe(["1", "a"]);
});

// test("adds 1 + 2 to equal 3", () => {
//   const x = 1;
//   const y = 2;

//   const result = addTwo(x, y);

//   //? result === 3
//   expect(result).toBe(3);
// });

// test("adds 0 + 2 to equal 2", () => {
//   //? Arrange
//   const x = 0;
//   const y = 2;

//   //? Act -> run the function -> get the result
//   const result = addTwo(x, y);

//   //? Assert -> eyeball
//   expect(result).toBe(5);
// });
