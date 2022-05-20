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
  const dayCharge = JSON.parse(readLine());
  const days = parseInt(readLine());
 
  let bill, discount;
    bill = dayCharge * days;
    if (days > 2 && days <= 5) { // changes >= to >
      discount = 5;
     bill= bill - (bill * discount) / 100;
    }
    if (days > 5) {              // changed >= to >
      discount = 15;
     bill= bill - (bill * discount) / 100;
    }
    console.log(`${bill}`);
}
