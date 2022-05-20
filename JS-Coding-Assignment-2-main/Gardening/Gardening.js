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
  const isGrassTrimmerFound = JSON.parse(readLine());
  const isWaterHosePipeFound = JSON.parse(readLine());

  const trimGrass = () => {
      return new Promise((resolve, reject) => {
          isGrassTrimmerFound ? resolve("Grass Trimmed") : reject("Grass Trimmer Not Found");
      });
  };
  
  const cleanGarden = () => {
      return new Promise((resolve, reject) => {
          resolve("Garden Cleaned");
      });
  };
  
  const waterPlants = () => {
      return new Promise((resolve, reject) => {
          isWaterHosePipeFound ? resolve("Watered Plants") : reject("Water Hose Pipe Not Found");
      });
  };

  const myPromise = async () => {
    try {
     
      const firstTask = await trimGrass();
      console.log(firstTask);
      const secondTask = await cleanGarden();
      console.log(secondTask);
      const thirdTask = await waterPlants();
      console.log(thirdTask);
      
    } catch(error) {

      console.log(error);
      
    }
  };
  
  myPromise();
}
