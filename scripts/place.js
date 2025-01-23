
let currentDate = new Date();
document.getElementById("currentyear").innerHTML = currentDate.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;



// This is the wind Chill calculation: (35.74 + (temperature * 0.6215)) - (35.75 *(windspeed **.16)) + (0.4275 * temperature * (windspeed **0.16))

let calculateWindChill = function(temperature, windspeed) {
    let windChill = (35.74 + (temperature * 0.6215)) - (35.75 *(windspeed **.16)) + (0.4275 * temperature * (windspeed **0.16));
    windChill = Math.round(windChill);
    return windChill;
}

document.querySelector("#windchill").textContent = `${calculateWindChill(4, 8)}℃`;