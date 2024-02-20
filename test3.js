function timeConversion(time) {
  let hours = parseInt(time.substr(0, 2));
  const period = time.substr(8, 2);

  if (period === 'AM' && hours === 12) {
      hours = 0;
  } else if (period === 'PM' && hours !== 12) {
      hours += 12;
  }

  return `${hours.toString().padStart(2, '0')}${time.substr(2, 6)}`;
}

const input = "12:05:00AM";
console.log(timeConversion(input));
