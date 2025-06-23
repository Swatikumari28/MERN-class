console.log("START");
const timeDelayInMS = 10000;
const callbackFunc = () => {
  console.log("HEllo");
};
window.setInterval(callbackFunc, timeDelayInMS);

console.log("END");
