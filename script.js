const fs = require("fs");

//challenge Part 1
fs.readFile("./floors.txt", (err, data) => {
  console.time("challenge");
  if (err) {
    return err;
  }
  const floorsArray = data.toString().split("");

  //Part 1
  const answer = floorsArray.reduce((acc, cur) => {
    return cur === "(" ? (acc += 1) : (acc -= 1);
  }, 0);

  //Part 2
  let curFloor = 0;
  let counter = 0;
  floorsArray.some((cur) => {
    cur === "(" ? (curFloor += 1) : (curFloor -= 1);
    counter++;
    return curFloor < 0;
  });
  console.timeEnd("challenge");
  console.log("Finish at floor: ", answer);
  console.log("Arrives at level -1:", counter);
});
