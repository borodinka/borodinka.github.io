const lightbulbSwitch = document.querySelector("#lightbulb-switch");
const lightbulImage = document.querySelector("#lightbulb-img");

let isLightBulbOn = false;

lightbulbSwitch.addEventListener('click', function() {
	if (isLightBulbOn) {
		lightbulImage.src = 'off.png';
		isLightBulbOn = false;
	} else {
		lightbulImage.src = 'on.png';
		isLightBulbOn = true;
	}
	console.log(isLightBulbOn);
});