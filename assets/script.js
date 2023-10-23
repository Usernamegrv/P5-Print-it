// tableau d'images pour le slide
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//Ajout écouteurs sur chacune des fleches 

const listArrow = document.querySelectorAll(".arrow")

for (let i = 0; i < listArrow.length; i++) {
	let arrowActuelle = listArrow[i]

	arrowActuelle.addEventListener("click", (event) => {
		maFleche = event.target
		console.log(`J'ai cliqué sur : ${maFleche.id}`)
	})
};

//BULLETS POINTS

//Ajout des bullets point en fonction du nbre d'images dans le slide

let currentSlideIndex = 0; 

const dots = document.querySelector(".dots")

function generateDots() {

	for (let i = 0; i < slides.length; i++) {

		const dot = document.createElement("div");
		dot.classList.add("dot");
		dot.setAttribute("data-slide-index", i); //stocke l'indice du tableau

		if (i === currentSlideIndex) {
			dot.classList.add("dot_selected");
			// on ajoute la class dot_selected au point actuel 
		}

		dots.appendChild(dot);
	}
}

//Appel la fonction pour générer les dots
generateDots();


//Ecouteurs d'événements dots

const dotsList = document.querySelectorAll(".dot");

dotsList.forEach((dot) => {
	dot.addEventListener("click", (event) => {
		const slideIndex = dot.getAttribute("data-slide-index");
		updateSlide(slideIndex - currentSlideIndex);

		console.log(`Vous avez cliqué sur dot ${slideIndex}`);

	});
});


//Ajout des dot_selected

function updateDot() {

	const dotSelected = document.querySelector(".dot_selected");
	dotSelected.classList.remove("dot_selected");
	dotsList[currentSlideIndex].classList.add("dot_selected"); // Ajoute la class dot_selected au dot actuel 

};


//Modifier le slide au click sur bouton 


const imageSlide = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");



function updateSlide(direction) {
	currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
	//calcul de la nouvelle position de la diapo

	imageSlide.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;

	tagLine.innerHTML = slides[currentSlideIndex].tagLine;

	updateDot();
}

//Mise à jour diapo sur fleches

const flecheGauche = document.querySelector(".arrow_left");
const flecheDroite = document.querySelector(".arrow_right");

flecheGauche.addEventListener("click", () => {
	updateSlide(-1);
});

flecheDroite.addEventListener("click", () => {
	updateSlide(1);
});