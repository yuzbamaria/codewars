// Instructions 
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// Option 1
export function simpleMultiplication(num: number): number {
    if (num % 2 === 0) return num * 8;
    else return num * 9;
  };

// Option 2
// export const simpleMultiplication = (num: number): number =>
//     num * (num % 2 === 0 ? 8 : 9);
