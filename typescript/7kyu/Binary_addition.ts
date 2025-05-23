// Task

// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

export function addBinary(a:number,b:number):string {
  let sum = a + b;
  let binary : number[] = [];
  let quotient: number;
  let remainder: number;

  if (sum >= 0) {
    quotient = Math.floor(sum / 2);
    remainder = sum % 2;
    binary.unshift(remainder);

    while (quotient > 0) {
      remainder = quotient % 2;
      quotient = Math.floor(quotient / 2);
      binary.unshift(remainder);
    };
    return binary.join('');
  }; 
  console.log(sum)
  sum = Math.abs(sum);
  quotient = Math.floor(sum / 2);
  remainder = sum % 2;
  binary.unshift(remainder);

  while (quotient > 0) {
    remainder = quotient % 2;
    quotient = Math.floor(quotient / 2);
    binary.unshift(remainder);
  };

  // Pad to 32 bits for random tests 
  while (binary.length < 32) {
    binary.unshift(0);
  };

  // Invert bits
  const updatedBinary = binary.map((num) => num === 1 ? 0 : 1);

  let carry = 1;
  for (let i = updatedBinary.length - 1; i >= 0; i--) {
    if (updatedBinary[i] === 1 && carry === 1) {
      updatedBinary[i] = 0;
      carry = 1;
    } else if (updatedBinary[i] === 0 && carry === 1) {
      updatedBinary[i] = 1;
      carry = 0;
    }
  };
  // console.log(updatedBinary)
  return updatedBinary.join('');
};

console.log(addBinary(12, -25));
// Update 
// sum -2279228905
// updatedBinary [
//   0, 1, 1, 1, 1, 0, 0, 0, 0,
//   0, 1, 0, 0, 1, 0, 1, 1, 0,
//   1, 1, 1, 0, 1, 0, 0, 0, 0,
//   1, 0, 1, 1, 1
// ]
// It should work for random inputs too: expected '01111000001001011011101000010111' to equal '-10000111110110100100010111101001'