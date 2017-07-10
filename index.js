var clicksPerSecond = 0;
var clicks = 0;

var amountPerClick = 1;

var onClick = function() {
    clicks += amountPerClick;
    render();
}

const block1CPS = 1;
const block2CPS = 5;
const block1Cost = 10;
const block2Cost = 50;
var block1Count = 0;
var block2Count = 0;

function click1() {
  if (clicks >= block1Cost) {
    clicks = clicks - block1Cost;
    block1Count++;
    clicksPerSecond += block1CPS;
    render();
  }
}

function click2() {
  if (clicks >= block2Cost) {
    clicks = clicks - block2Cost;
    block2Count++;
    clicksPerSecond += block2CPS;
    render();
  }
}

var gainz = setInterval(updateClicks, 1000);

function updateClicks() {
  clicks += clicksPerSecond;
  render();
}

function render() {
  document.getElementById("click_count").innerHTML = "Clicks: " + clicks;
  document.getElementById("cps1").innerHTML = block1CPS;
  document.getElementById("cost1").innerHTML = block1Cost;
  document.getElementById("count1").innerHTML = block1Count;

  document.getElementById("cps2").innerHTML = block2CPS;
  document.getElementById("cost2").innerHTML = block2Cost;
  document.getElementById("count2").innerHTML = block2Count;

}
