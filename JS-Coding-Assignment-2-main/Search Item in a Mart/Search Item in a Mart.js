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
  const categoryOfItem = readLine();
  const item = readLine();

  const mart = [
    {
      category:"pulses",
      items: ["green gram", "green peas", "Turkish gram"]
    },
    {
      category:"soaps",
      items:["santoor", "dove", "lux", "pears"]
    }, 
    {
      category:"oil",
      items: ["sunflower oil", "grapeseed oil", "soybean oil"]
    }, 
    {
      category:"cereals",
      items: ["wheat", "rice", "maize", "oat"]
    }, 
    {
      category:"spices",
      items: ["cumin", "coriander", "black pepper", "clove"]
    }
  ];
  
  const searchItem = () => {
      return new Promise((resolve, reject) => {
          const categoryObject = mart.find(eachMart =>
          eachMart.category === categoryOfItem);
          
          if (categoryObject !== undefined) {
              const isItemFound = categoryObject.items.includes(item);
              
              if (isItemFound) {
                  resolve("Item Found");
              } else {
                  reject("Item Not Found");
              }
          } else {
              reject("Category Not Found");
          }
      });
  };
  const myPromise = async () => {
      try {
          let result = await searchItem();
          console.log(result);
      } catch(rejection) {
          console.log(rejection);
      }
  };
  
  myPromise();
}
