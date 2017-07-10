var clicksPerSecond = 0;
var clicks = 0;

var amountPerClick = 1;

var block1CPS = 1;
var block2CPS = 5;
var block1Cost = 10;
var block2Cost = 50;
var block1s = 0;
var block2s = 0;

function click1() {
  if (clicks >= block1Cost) {
    clicks = clicks - block1Cost;
    block1s++;
    clicksPerSecond += block1CPS;
    updateCPS();
  }
}

function click2() {
  if (clicks >= block2Cost) {
    clicks = clicks - block2Cost;
    block2s++;
    clicksPerSecond += block2CPS;
    updateCPS();
  }
}

var gainz = setInterval(updateClicks, 1000);

function onClick() {
    clicks += amountPerClick;
    console.log("document.getElementById");
    document.getElementById("click_count").innerHTML = "Clicks: " + clicks;
}

function updateClicks() {
  clicks += clicksPerSecond;
  document.getElementById("click_count").innerHTML = "Clicks: " + clicks;
}

function updateCPS() {
    document.getElementById("cps_count").innerHTML = "Clicks Per Second: " + clicksPerSecond;
}
