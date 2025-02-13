
const jimenez = [
	{
        name: "Dionisia Jimenez",
        birth: "9 October 1881 Petilla de Aragón, Navarra, Navarra, Spain",
        father: "Francisco Sebastiano Gimenez",
        mother: "Juana Gia Bisauta",
        marriage: "23 July 1900 Mauléon-Licharre, Pyrénées-Atlantiques, Aquitaine, France",
        spouse: "Joaquin Bagüés",
        imageUrl: "images/dionisia-jimenez.webp"
    },
    {
        name: "Francisco Sebastiano Jimenez",
        birth: "abt 1841 Petilla de Aragón, Navarra, Navarra, Spain",        
        father: "Sebastian Gimenez",
        mother: "Juana Artieda",
        marriage: "Unknown",
        spouse: "Juana Gia Bisauta",      
        imageUrl: "images/male_avatar.gif"
    },
    {
        name: "Juana Gia Bisauta",
        birth: "abt 1853 Nafarroa, Spain",        
        father: "Pedro Miguel Batista",
        mother: "Manuela Samities",
        marriage: "Unknown",
        spouse: "Francisco Sebastiano Jimenez",      
        imageUrl: "images/female_avatar.gif"
    },
    {
        name: "Gregorio Antonio Jimenez",
        birth: "10 May 1878 Petilla de Aragón, Navarra, Navarra, Spain",        
        father: "Francisco Sebastiano Jimenez",
        mother: "Juana Gia Bisauta",
        marriage: "12 February 1908 Mexico City, Mexico",
        spouse: "Maria Arquilue",      
        imageUrl: "images/gregorio-jimenez.webp"
    },
    {
        name: "Jose Jimenez",
        birth: "Abt 1883 Petilla de Aragón, Navarra, Navarra, Spain",        
        father: "Francisco Sebastiano Jimenez",
        mother: "Juana Gia Bisauta",
        marriage: "Unknown",
        spouse: "Unknown",      
        imageUrl: "images/male_avatar.gif"
    },
    {
        name: "Francisco Gimenez",
        birth: "15 September 1889 Petilla de Aragón, Navarra, Navarra, Spain",        
        father: "Francisco Sebastiano Jimenez",
        mother: "Juana Gia Bisauta",
        marriage: "29 November 1913 Oakland, Alameda, California, United States",
        spouse: "Gregoria Sabalza",      
        imageUrl: "images/francisco-jimenez.webp"
    }
];

const dionisiaJimenez = document.querySelector(".dionisiaJimenez");
const franciscoSebastianoJimenez = document.querySelector(".franciscoSebastianoJimenez");
const juanaGiaBisauta = document.querySelector(".juanaGiaBisauta");
const gregorioAntonioJimenez = document.querySelector(".gregorioAntonioJimenez");
const joseJimenez = document.querySelector(".joseJimenez");
const franciscoJimenez = document.querySelector(".francisoJimenez");

onload = () => {
	displayBio(jimenez.filter(person => person.name.includes('Dionisia')));
	dionisiaJimenez.classList.add('active');
}

let clearActive  = () => {
	dionisiaJimenez.classList.remove('active');
	franciscoSebastianoJimenez.classList.remove('active');
	juanaGiaBisauta.classList.remove('active');
	gregorioAntonioJimenez.classList.remove('active');
    joseJimenez.classList.remove('active');
    franciscoJimenez.classList.remove('active');
};

dionisiaJimenez.addEventListener("click", () => {
	clearActive();
	displayBio(jimenez.filter(person => person.name == "Dionisia Jimenez"));	
	dionisiaJimenez.classList.add('active');
});

franciscoSebastianoJimenez.addEventListener("click", () => {
	clearActive();
	displayBio(jimenez.filter(person => person.name == "Francisco Sebastiano Jimenez"));	
	franciscoSebastianoJimenez.classList.add('active');
});

juanaGiaBisauta.addEventListener("click", () => {
	clearActive();
	displayBio(jimenez.filter(person => person.name == "Juana Gia Bisauta"));	
	juanaGiaBisauta.classList.add('active');
});

gregorioAntonioJimenez.addEventListener("click", () => {
	clearActive();
	displayBio(jimenez.filter(person => person.name == "Gregorio Antonio Jimenez"));	
	gregorioAntonioJimenez.classList.add('active');
});

joseJimenez.addEventListener("click", () => {
	clearActive();
	displayBio(jimenez.filter(person => person.name == "Jose Jimenez"));	
	joseJimenez.classList.add('active');
});

franciscoJimenez.addEventListener("click", () => {
	clearActive();
	displayBio(jimenez.filter(person => person.name == "Francisco Jimenez"));	
	franciscoJimenez.classList.add('active');
});

function displayBio(filteredjimenez) {
	document.querySelector(".profile").innerHTML = "";

    filteredjimenez.foreach(jimenez => {    
        let bio = document.createElement("section");
        let personName = document.createElement("h3");
        let birth = document.createElement("p");
        let father = document.createElement("p");
        let mother = document.createElement("p");
        let marriage = document.createElement("p");
        let spouse = document.createElement("p");
        let figure = document.createElement("figure");
        let img = document.createElement("img");

        personName.textContent = `${jimenez.name}`;
        birth.innerHTML = `<span class="label">Birth:</span> ${jimenez.birth}`;
        father.innerHTML = `<span class="label">Father:</span> ${jimenez.father}`;
        mother.innerHTML = `<span class="label">Mother:</span> ${jimenez.mother}`;
        marriage.innerHTML = `<span class="label">Marriage:</span> ${jimenez.marriage}`;
        spouse.innerHTML = `<span class="label">Spouse:</span> ${jimenez.spouse}`;
        img.setAttribute("src", jimenez.imageUrl);
        img.setAttribute("alt", jimenez.name);
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
