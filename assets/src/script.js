var timer;

window.onload = () => {
	timer = setInterval(timerDisplay, 1000);
}

function timerDisplay() {
	$("#today").text(moment().format("MMM DD, YYYY [at] hh:mm:ss A"));
}