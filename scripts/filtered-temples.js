
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

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Logan Utah",
	  location: "Logan, Utah, United States",
	  dedicated: "1884, May, 19",
	  area: 119619,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-utah-temple-flag-1143314-wallpaper.jpg"
	},
	{
		templeName: "Salt Lake Utah",
		location: "Salt Lake City, Utah, United States",
		dedicated: "1893, April, 24",
		area: 382207,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
	},
	{
		templeName: "Jordan River Utah",
		location: "South Jordan, Utah, United States",
		dedicated: "1981, November, 20",
		area: 148236,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/CWD_070ac208-d163-4faa-8123-c583b099c319.jpg"
	},
	{
		templeName: "Stockholm Sweden",
		location: "Västerhaninge, Sweden",
		dedicated: "1985, July, 4",
		area: 31000,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/stockholm-sweden/400x250/stockholm-sweden-lds-temple-1029790-wallpaper.jpg"
	},
	{
		templeName: "Madrid Spain",
		location: "Madrid, Spain",
		dedicated: "1999, March, 21",
		area: 45800,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-temple-954939-wallpaper.jpg"
	}
];

createTempleCard(temples);


const homeLink = document.querySelector(".home");
const oldLink = document.querySelector(".old");
const newLink = document.querySelector(".new");
const largeLink = document.querySelector(".large");
const smallLink = document.querySelector(".small");
const h2 = document.querySelector("h2");

homeLink.classList.add('active');

let clearActive  = () => {
	homeLink.classList.remove('active');
	oldLink.classList.remove('active');
	newLink.classList.remove('active');
	largeLink.classList.remove('active');
	smallLink.classList.remove('active');
};

homeLink.addEventListener("click", () => {
	clearActive();
	createTempleCard(temples);	
	homeLink.classList.add('active');
	document.querySelector("h2.active").textContent = "Home";
})

oldLink.addEventListener("click", () => {
	clearActive();
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated) < 1900));	
	oldLink.classList.add('active');
	document.querySelector("h2.active").textContent = "Old";
});

newLink.addEventListener("click", () => {
	clearActive();
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated) > 2000));	
	newLink.classList.add('active');
	document.querySelector("h2.active").textContent = "New";
});

largeLink.addEventListener("click", () => {
	clearActive();
	createTempleCard(temples.filter(temple => temple.area > 90000));	
	largeLink.classList.add('active');
	document.querySelector("h2.active").textContent = "Large";
});

smallLink.addEventListener("click", () => {
	clearActive();
	createTempleCard(temples.filter(temple => temple.area < 10000));
	smallLink.classList.add('active');
	document.querySelector("h2.active").textContent = "Small";
	
});

function createTempleCard(filteredTemples) {
	document.querySelector(".temple").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		if (temple.location.length < 20) {
			const invisibleChar = "\u200B";
			location.innerHTML = `<span class="label">Location:</span> ${temple.location}<br>${invisibleChar}`;
		}
		else {
			location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		}
		dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area}sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".temple").appendChild(card);
});
}