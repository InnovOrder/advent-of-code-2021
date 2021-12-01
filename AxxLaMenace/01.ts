import { data } from "./01.data";

// PART 1 : normal increase
let count = 0;
for (let i = 1; i < data.length; i++) {
  if (data[i] > data[i - 1]) {
    count++;
  }
}
console.log("count", count); // 1266

// PART 2 : 3-sliding increase
let slidingCount = 0;
for (let i = 3; i < data.length; i++) {
  if (data[i] > data[i - 3]) {
    slidingCount++;
  }
}
console.log("slidingCount", slidingCount); // 1217
