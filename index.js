var clicksPerSecond = 0;
var clicks = 0;

const block1CPS = 1;
const block2CPS = 5;
const block1Cost = 10;
const block2Cost = 50;
var block1s = 0;
var block2s = 0;

function click1() {
  if (clicks >= block1Cost) {
    clicks = clicks - block1Cost;
    block1s++;
  }
}

function click2() {
  if (clicks >= block2Cost) {
    clicks = clicks - block2Cost;
    block2s++;
  }
}

var gainz = setInterval(updateClicks, 1000);

function updateClicks() {
  
}
