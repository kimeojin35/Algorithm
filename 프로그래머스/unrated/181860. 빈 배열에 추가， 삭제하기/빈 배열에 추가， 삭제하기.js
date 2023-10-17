function solution(arr, flag) {
  const X = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (flag[i] === true) {
      for (let j = 0; j < arr[i] * 2; j++) {
        X.push(arr[i]);
      }
    } else {
      const count = arr[i];
      X.splice(-count);
    }
  }
  
  return X;
}