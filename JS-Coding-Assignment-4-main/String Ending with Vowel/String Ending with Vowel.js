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
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  
  let isStartWithVowel = false;
  const lowerCaseString = inputString.toUpperCase();
  
  for (let letter of vowels) {
      const result = lowerCaseString.endsWith(letter);
      if (result) {
          isStartWithVowel = true;
      }
  }
  
  if (isStartWithVowel) {
      console.log(isStartWithVowel);
  } else {
      console.log(false);
  }
}
