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

class Submarine {
  constructor() {
    this.isSubmerged = false;
  }

  dive() {
      this.isSubmerged = true;
      console.log("Submarine Submerged");
  }
  
  surface() {
      this.isSubmerged = false;
      console.log("Submarine Surfaced");
  }
}

class WeaponUnit extends Submarine {
    
    constructor(totalTorpedos, torpedosFired) {
        super();
        this.totalTorpedos = totalTorpedos;
        this.torpedosFired = torpedosFired;
    }
    fireTorpedos() {
        this.totalTorpedos = this.totalTorpedos - this.torpedosFired;
        console.log(`${this.torpedosFired} Torpedos Fired, ${this.totalTorpedos} Left`);
    }
}

/* Please do not modify anything below this line */

function main() {
  const totalTorpedos = parseInt(readLine());
  const torpedosFired = parseInt(readLine());  
  
  const weaponUnit1 = new WeaponUnit(totalTorpedos, torpedosFired);
  
  weaponUnit1.dive();
  weaponUnit1.fireTorpedos();
  weaponUnit1.surface();
}
