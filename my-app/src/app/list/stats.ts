// 최대값 구하기
// exports.max = (numbers: number[]) => {
//   let result = numbers[0];
//   numbers.forEach((n) => {
//     if (n > result) {
//       result = n;
//     }
//   });
//   return result;
// };

// 리팩토링
exports.max = (numbers: number[]) => Math.max(...numbers);

exports.min = (numbers: number[]) => Math.min(...numbers);

exports.avg = (numbers: number[]) =>
  numbers.reduce(
    (acc, current, index, { length }) => acc + current / length,
    0
  );

exports.sort = (numbers: number[]) => numbers.sort((a, b) => a - b);

exports.median = (numbers: number[]) => {
  const { length } = numbers;
  const middle = Math.floor(length / 2);
  return length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};
