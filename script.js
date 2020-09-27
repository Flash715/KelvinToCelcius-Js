function myTemp() {
	let kelvinTemp = document.getElementById("userValue").value;

	if (kelvinTemp == ""){
		alert("Enter kelvin temps");
		return false;
	} else {
			let CelciusTemp = kelvinTemp - 273.15;
	CelciusTemp = parseFloat(CelciusTemp).toFixed(2);

	document.getElementById("output").innerHTML =
	"Conversion of given temp :" + CelciusTemp + " C°";
	}
}
