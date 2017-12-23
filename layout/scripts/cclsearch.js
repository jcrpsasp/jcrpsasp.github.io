var states = [
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Valid",
	"Expired",
	"Expired",
	"Expired",
	"Expired",
	"Revoked",
	"Revoked"
]

function newState() {
	var getState = Math.floor(Math.random() * (states.length));
	document.getElementById("stateDisplay").innerHTML = states[getState];
}

