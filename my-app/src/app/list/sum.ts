function sum(a: number, b: number): number {
  return a + b;
}

function sumOf(numbers: number[]) {
  let result = 0;
  numbers.forEach((n) => {
    result += n;
  });
  return result;
}

// 각각 내보내기
exports.sum = sum;
exports.sumOf = sumOf;
