

document.getElementById('butn').addEventListener("click", calculateInsurance);

var chooseContry = document.getElementById('contry');


function calculateInsurance() {

	var name = document.getElementById('nam').value;

	var choosCo = chooseContry.value;

	var horse_power = parseInt(document.getElementById('hop').value);

	var age = parseInt(document.getElementById('ag').value);

	if (choosCo === 'Austria') {
		var ins = name + ",   your insurance costs "+Math.floor((horse_power * 100)/(age)+50) + "€";
	}

	else if (choosCo ==='Hungary') {
		var ins = name+",  your insururance costs "+Math.floor((horse_power *120)/(age)+100)+" €";
	}

	else if (choosCo === 'Greece') {
		var ins = name+",  your insururance costs "+Math.floor((horse_power *130)/(age+3)+50)+" €";
	}

	else {
		var ins = "Please fill all fields!";
	}

document.getElementById('show').innerHTML=ins;
}

