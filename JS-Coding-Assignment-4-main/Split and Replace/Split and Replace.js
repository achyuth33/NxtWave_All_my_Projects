"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const inputString = readLine();
  const separator = readLine();
  const replaceString = readLine();
  
  const result = inputString.split(separator);
  const restaurant = result.map(item => item.length > 7 ? item = replaceString : item = item);
  
  console.log(restaurant.join(' '));
}
