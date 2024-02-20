function minMaxSum(numbers) {
  numbers.sort((a, b) => a - b);

  const minSum = numbers.slice(0, -1).reduce((acc, val) => acc + val, 0);
  const maxSum = numbers.slice(1).reduce((acc, val) => acc + val, 0);

  return `${minSum} ${maxSum}`;
}

const arr = [1, 2, 3, 4, 5];
console.log(minMaxSum(arr));
