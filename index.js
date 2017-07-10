var clicksPerSecond = 0;
var clicks = 0;
var amountPerClick = 1;

var onClick = function() {
    clicks += amountPerClick;
    console.log("document.getElementById")
    document.getElementById("click_count").innerHTML = "Clicks: " + clicks;
}
