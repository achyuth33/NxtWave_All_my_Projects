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

class Mobile {
 
  constructor(brand, ram, battery, isOnCall, song) {
      this.brand = brand;
      this.ram = ram;
      this.battery = battery;
      this.song = song;
      this.isOnCall = isOnCall;
  }
  
  charging() {
      if (this.battery < 100) {
          this.battery = 100;
          console.log('Mobile charged 100%');
      } else {
          console.log('Mobile is fully charged');
          
          this.removeCharging();
      }
  }
  
  playMusic() {
      console.log(`Playing ${this.song} song`);
  }
  
  stopMusic() {
      console.log('Music stopped');
  }
  

  makeCall() {
      this.isOnCall = true;
      if(this.isOnCall) {
          console.log('Calling...');
      }
  }
  
  endCall() {
      if (this.isOnCall) {
          console.log('Call Ended');
          this.isOnCall = false;
      } else {
          console.log('No ongoing call to end');
      }
          
      
}
  
  removeCharging() {
      return console.log('Please remove charging');
  }
}

/* Please do not modify anything below this line */

function main() {
  const brand = readLine();
  const ram = readLine();
  const battery = parseInt(readLine());
  const song = readLine();
  const isOnCall = JSON.parse(readLine());
  
  const myMobile = new Mobile(brand, ram, battery, isOnCall, song);
  
  console.log(`Mobile charged ${myMobile.battery}%`);   //  The Mobile battery charged percentage
  myMobile.charging();  // The Mobile charging
  
  myMobile.playMusic(); // The Mobile will start playing a song
  myMobile.stopMusic(); // The Mobile will stop playing a song
  
  myMobile.endCall(); // The Mobile will end a call.
  myMobile.makeCall(); // The Mobile will make a call.
  myMobile.endCall(); // The Mobile will end a call.
}
