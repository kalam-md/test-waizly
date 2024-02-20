function plusMinus(numbers) {
  const totalNumbers = numbers.length;
  const positiveRatio = numbers.filter(num => num > 0).length / totalNumbers;
  const negativeRatio = numbers.filter(num => num < 0).length / totalNumbers;
  const zeroRatio = numbers.filter(num => num === 0).length / totalNumbers;

  return `${positiveRatio.toFixed(6)} ${negativeRatio.toFixed(6)} ${zeroRatio.toFixed(6)}`;
}

const arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr));
