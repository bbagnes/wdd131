
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
	  "images/aba-nigeria-temple.webp"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "images/manti-temple.webp"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "images/payson-utah-temple.webp"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "images/yigo-guam-temple.webp"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "images/washington-dc-temple.webp"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "images/lima-peru-temple.webp"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "images/mexico-city-temple.webp"
	},
	{
	  templeName: "Logan Utah",
	  location: "Logan, Utah, United States",
	  dedicated: "1884, May, 19",
	  area: 119619,
	  imageUrl:
	  "images/logan-utah-temple.webp"
	},
	{
		templeName: "Salt Lake Utah",
		location: "Salt Lake City, Utah, United States",
		dedicated: "1893, April, 24",
		area: 382207,
		imageUrl:
		"images/salt-lake-temple.webp"
	},
	{
		templeName: "Jordan River Utah",
		location: "South Jordan, Utah, United States",
		dedicated: "1981, November, 20",
		area: 148236,
		imageUrl:
		"images/jordan-river-temple.webp"
	},
	{
		templeName: "Stockholm Sweden",
		location: "Västerhaninge, Sweden",
		dedicated: "1985, July, 4",
		area: 31000,
		imageUrl:
		"images/stockholm-sweden-temple.webp"
	},
	{
		templeName: "Madrid Spain",
		location: "Madrid, Spain",
		dedicated: "1999, March, 21",
		area: 45800,
		imageUrl:
		"images/madrid-spain-temple.webp"
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