// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

export function sumTwoSmallestNumbers(numbers:Array<number>):number {  
  // spread the array elements as individual arguments using the spread operator
  const minNum1 = Math.min(...numbers);
  
  let minNumsArr: number[] = [];
  let updatedArr: number[] = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === minNum1) minNumsArr.push(minNum1);
    else updatedArr.push(numbers[i])
  };

  if(minNumsArr.length < 2) {
    const minNum2 = Math.min(...updatedArr);
    minNumsArr.push(minNum2)
  };
  
  return minNumsArr.reduce((total, num) => total + num);
}

// Option 2
export function sumTwoSmallestNumbers2(numbers: number[]): number {
	const [first, second] = numbers.sort((a, b) => a - b); // array destructuring & sorting in ascending order
	return first + second;
}