const lightbulbSwitch = document.querySelector("#lightbulb-switch");
const lightbulbImage = document.querySelector("#lightbulb-img");

let isLightBulbOn = false;

lightbulbSwitch.addEventListener('click', function() {
	if (isLightBulbOn) {
		lightbulbImage.src = 'off.png';
		isLightBulbOn = false;
	} else {
		lightbulbImage.src = 'on.png';
		isLightBulbOn = true;
	}
	console.log(isLightBulbOn);
});
