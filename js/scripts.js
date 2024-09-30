const btnElement = document.querySelector("#theBtn");
const navElement = document.querySelector("#theNav");

btnElement.addEventListener("click", () => {
  btnElement.classList.toggle("open");
  navElement.classList.toggle("open");
});

import { reviews } from "./reviews.js";
console.log(reviews);

const myCard = document.querySelector("#cardsR");
for (let x = 0; x < reviews.length; x++) {
  const mySection = document.createElement("section");
  const myName = document.createElement("h3");
  myName.textContent = reviews[x].name;
  const myReview = document.createElement("p");
  myReview.textContent = reviews[x].text;

  const myRating = document.createElement("div");

  for (let step = 0; step < reviews[x].stars; step++) {
    const stars = document.createElement("img");
    stars.src = "./images/star.svg";
    stars.alt = "a star"
    myRating.appendChild(stars);
  }

  mySection.appendChild(myName);
  mySection.appendChild(myRating);
  mySection.appendChild(myReview);
  myCard.appendChild(mySection);
}
