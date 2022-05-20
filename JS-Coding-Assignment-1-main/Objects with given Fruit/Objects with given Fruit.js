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
  const fruit = readLine();
  const objectEntities = [
    {
      fruit: "apple",
      vegetable: "broccoli"
    },
    {
      fruit: "kiwi",
      vegetable: "broccoli"
    },
    {
      fruit: "apple", 
      vegetable: "cauliflower"
    },
    {
      fruit: "orange", 
      vegetable: "mushrooms"
    },
  ];
  
  const res = objectEntities.filter( item => item.fruit == fruit );
  console.log(res);
}
