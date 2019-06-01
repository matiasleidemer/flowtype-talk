const arrayOfNumbers = [1, 2, 3, 4];
const arrayOfOtherNumbers = [5, 6, 7, 8];
const arrayOfNumbersAndStrings = [1, '2', 3, '4', 'insiter']; // Remember, flow doesn't run in runtime, so it can't tell which type of
// object you are acessing:
// const someNumber: number = arrayOfNumbersAndStrings[0];
// const someString: string = arrayOfNumbersAndStrings[0];

const someValue = arrayOfNumbersAndStrings[0];