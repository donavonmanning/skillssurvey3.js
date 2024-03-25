const randomDecimal = Math.random();
const range = 33 - 3 + 1; // 31
const randomInRange = randomDecimal * range; // Adjusts the range to get a number between 0 (inclusive) and the value of 'range' (exclusive).
const randomInt = Math.floor(randomInRange); // Convert the decimal number to an integer to get values between 0 and (range - 1).
const shiftValue = randomInt + 3; // Shift the range to get an integer between 3 and 33

const range = 33 - 3 + 1; // 31
// q1 to make sure there is range and 31 numbers
//q2 multiplying the ramndom decimal by ther range makes the decimal go to the range of 0
