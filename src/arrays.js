// @flow

const arrayOfNumbers: Array<number> = [1, 2, 3, 4]

const arrayOfNumbersAndStrings: Array<number | string> = [
  1,
  '2',
  3,
  '4',
  'insiter'
]

// const someNumber: number = arrayOfNumbersAndStrings[0];
// const someString: string = arrayOfNumbersAndStrings[0];
const someValue: number | string = arrayOfNumbersAndStrings[0]
