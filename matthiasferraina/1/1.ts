import { data } from "./1.data.ts";

let consecutiveIncreasingDeepNumber = 0;
for (let index = 0; index < data.length - 1; index++) {
  const currentDeep = data[index];
  const nextDeep = data[index + 1];
  if (currentDeep < nextDeep) consecutiveIncreasingDeepNumber++;
}

let consecutiveWindowIncreasingDeepNumber = 0;
let previousWindowSum = 0;
for (let index = 0; index < data.length - 2; index++) {
  const currentWindowSum: number =
    data[index] + data[index + 1] + data[index + 2];

  if (previousWindowSum && previousWindowSum < currentWindowSum)
    consecutiveWindowIncreasingDeepNumber++;

  previousWindowSum = currentWindowSum;
}

console.log("enigme 1 :", consecutiveIncreasingDeepNumber);
console.log("enigme 1 bis:", consecutiveWindowIncreasingDeepNumber);
