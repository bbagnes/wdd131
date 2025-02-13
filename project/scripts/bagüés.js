
const bagüés = [
	{
	  name: "Joaquin Bagüés",
	  birth: "22 July 1872 Sádaba, Zaragoza, Aragón, Spain",	  
	  father: "Benito Bagüés",
      mother: "Maria Contreras",
      marriage: "23 July 1900 Mauléon-Licharre, Pyrénées-Atlantiques, Aquitaine, France",
      spouse: "Dionisia Gimenez",      
	  imageUrl: "images/joaquin-bagues.jpg"
	},
	{
        name: "Benito Bagüés",
        birth: "about 1840 Spain",        
        father: "Bagüés",
        mother: "Cirez",
        marriage: "Unknown",
        spouse: "Maria Contreras",      
        imageUrl: "images/male_avatar.gif"      
	},	  
	{
        name: "Maria Contreras",
        birth: "about 1852 Spain",        
        father: "Contreras",
        mother: "Unknown",
        marriage: "Unknown",
        spouse: "Benito Bagüés",      
        imageUrl: "images/female_avatar.gif"
    },
	{
        name: "Hilario Bagüés",
        birth: "13 January 1878 Sádaba, Zaragoza, Aragón, Spain",        
        father: "Benito Bagüés",
        mother: "Maria Contreras",
        marriage: "23 November 1912 Alameda, California, United States",
        spouse: "Dorotea Irilla",      
        imageUrl: "images/male_avatar.gif"
    },
];

const joaquinBagüés = document.querySelector(".joaquinBagüés");
const benitoBagüés = document.querySelector(".benitoBagüés");
const mariaContreras = document.querySelector(".mariaContreras");
const hilarioBagüés = document.querySelector(".hilarioBagüés");

onload = () => {
	displayBio(bagüés.filter(bagi => bagi.name.includes('Joaquin')));
	joaquinBagüés.classList.add('active');
}

let clearActive  = () => {
	joaquinBagüés.classList.remove('active');
	benitoBagüés.classList.remove('active');
	mariaContreras.classList.remove('active');
	hilarioBagüés.classList.remove('active');
};

joaquinBagüés.addEventListener("click", () => {
	clearActive();
	displayBio(bagüés.filter(bagi => bagi.name == "Joaquin Bagüés"));	
	joaquinBagüés.classList.add('active');
});

benitoBagüés.addEventListener("click", () => {
	clearActive();
	displayBio(bagüés.filter(bagi => bagi.name.includes("Benito")));	
	benitoBagüés.classList.add('active');
});

mariaContreras.addEventListener("click", () => {
	clearActive();
	displayBio(bagüés.filter(bagi => bagi.name.includes("Maria")));	
	mariaContreras.classList.add('active');
});

hilarioBagüés.addEventListener("click", () => {
	clearActive();
	displayBio(bagüés.filter(bagi => bagi.name.includes("Hilario")));	
	hilarioBagüés.classList.add('active');
});

function displayBio(filteredbagi) {
	document.querySelector(".profile").innerHTML = "";

	filteredbagi.forEach(bagi => {
		let bio = document.createElement("section");
		let personName = document.createElement("h3");
		let birth = document.createElement("p");
		let father = document.createElement("p");
		let mother = document.createElement("p");
		let marriage = document.createElement("p");
		let spouse = document.createElement("p");
		let figure = document.createElement("figure");
		let img = document.createElement("img");

		personName.textContent = `${bagi.name}`;
		birth.innerHTML = `<span class="label">Birth:</span> ${bagi.birth}`;
		father.innerHTML = `<span class="label">Father:</span> ${bagi.father}`;
		mother.innerHTML = `<span class="label">Mother:</span> ${bagi.mother}`;
		marriage.innerHTML = `<span class="label">Marriage:</span> ${bagi.marriage}`;
		spouse.innerHTML = `<span class="label">Spouse:</span> ${bagi.spouse}`;
		img.setAttribute("src", bagi.imageUrl);
		img.setAttribute("alt", bagi.name);
		img.setAttribute("loading", "lazy");

		figure.appendChild(img);
		bio.appendChild(figure);
		bio.appendChild(personName);
		bio.appendChild(birth);
		bio.appendChild(father);
		bio.appendChild(mother);
		bio.appendChild(marriage);
		bio.appendChild(spouse);
		

	document.querySelector(".profile").appendChild(bio);
});
}



