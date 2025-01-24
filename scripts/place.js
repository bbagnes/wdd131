
let currentDate = new Date();
document.getElementById("currentyear").innerHTML = currentDate.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;



// This is the wind Chill calculation: (35.74 + (temperature * 0.6215)) - (35.75 *(windspeed **.16)) + (0.4275 * temperature * (windspeed **0.16))

let calculateWindChill = function(temperature, windspeed) {
    let fTemperature = (temperature * 9/5) + 32;
    let windChill = (35.74 + (fTemperature * 0.6215)) - (35.75 *(windspeed **.16)) + (0.4275 * fTemperature * (windspeed **0.16));
    let windChillCelsius = Math.round(((windChill -32) * 5/9)*10)/10;
    return windChillCelsius;
}

document.querySelector("#windchill").textContent = `${calculateWindChill(4, 8)}℃`;