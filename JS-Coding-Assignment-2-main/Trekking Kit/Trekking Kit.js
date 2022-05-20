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

function Trekking(kit, item) {
  this.kit = kit;
  this.item = item;
}

function main() {
  const item = readLine();
  const trekkingKit = {
    ruckSackBag : true,
    clothes: ["Shirt", "T-Shirt/Full sleeves","Jeans"],
    firstAid: true,
    waterBottle: "2 liters",
    sunGlasses: "UV Protection",
    headTorch: true,
    medicines: true,
    footWear: "Non-skid",
    food: ["dry fruits", "nuts", "chocolate bars"]
  };
  
  const trekkingBag = Object.getOwnPropertyNames(trekkingKit);
  const trekking = new Trekking(trekkingBag, item);
  
  Trekking.prototype.isKitContains = function() {
      return this.kit.includes(this.item);
  };
  
  console.log(trekking.isKitContains());
}
