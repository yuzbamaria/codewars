// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

export function invert(array: number[]): number[] {
  if (array.length === 0) return [];
  
  const result =  array.map((num) => {
    if (num === 0) return -num;
    if(Math.sign(num) === 1) return -num;
    if(Math.sign(num) === -1) return Math.abs(num);
    return 0;
  })

  return result
}

// option 2
// export function invert(array: number[]): number[] {
//    return array.map(n => -n)
// }
