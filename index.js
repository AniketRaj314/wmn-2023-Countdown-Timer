let hackathonEndString = "May 28, 2023 12:30:00";

var countDownDate = new Date(hackathonEndString).getTime();

var x = setInterval(function () {
	var now = new Date().getTime();

	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("countdown").innerHTML = `${days > 0 ? days + ":" : ""}${
		hours < 10 ? `0${hours}` : hours
	}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

	if (hours < 4 && hours >= 2) {
		document.getElementById("countdown").style.color = "#EC6A5B";
	}

	if (hours < 2) {
		document.getElementById("countdown").style.color = "red";
	}
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "TIME'S UP!";
	}
}, 1000);
