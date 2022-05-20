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
  const expiryDate = new Date(readLine());
  const monthsBeforeExpiry = parseInt(readLine());

  const manufacturingDate = new Date(expiryDate.getFullYear(), expiryDate.getMonth() - monthsBeforeExpiry, expiryDate.getDate());

/* Please do not modify anything below this line */
  console.log(`${manufacturingDate.getDate()}-${manufacturingDate.getMonth() + 1}-${manufacturingDate.getFullYear()}`);
}
