function positiveSum(arr) {
  var sum = 0;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    } else if (arr === []) {
      return 0;
    }
  }
  return sum;
}
