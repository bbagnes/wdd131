let currentDate = new Date();
document.getElementById("currentyear").innerHTML = currentDate.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const headerh1 = document.querySelector('h1');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
    headerh1.classList.toggle('show');
});

onload = () => {
    let visits = document.querySelector(".greeting");
    let visitCount = Number(window.localStorage.getItem("visits")) || 0;
        
    if (visitCount !== 0) {
         visits.textContent = `Welcome Back to Bagnes Family Genealogy`;
        
        } else {            
            visits.textContent = `Welcome to Bagnes Family Genealogy`;
        }

        visitCount++;

        window.localStorage.setItem("visits", visitCount);
    };