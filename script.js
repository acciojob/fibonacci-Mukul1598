// function fibonacci(num) {
	// your code here
//   let arr = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   return arr[num];
// }

function fibonacci(num) {
	  your code here
  if (num === 0 || num === 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}