// console.log(data);

// WRITE YOUR CODE BELOW!

const DOGS_LIST_UL = document.querySelector(".dogs-list");
const DOGS_CARD_SECTION = document.querySelector(".main__dog-section");

function createDoggerBio(DOG) {
  const DOG_BIO_DIV = document.createElement("div");
  DOG_BIO_DIV.classList.add("main__dog-section__desc");
  const BIO_TITLE_H3 = document.createElement("h3");
  BIO_TITLE_H3.textContent = "Bio";
  const BIO_TEXT_P = document.createElement("p");
  BIO_TEXT_P.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  DOG_BIO_DIV.appendChild(BIO_TITLE_H3);
  DOG_BIO_DIV.appendChild(BIO_TEXT_P);
  return DOG_BIO_DIV;
}

function createDoggerCard(DOG) {
  const DOG_NAME_H2 = document.createElement("h2");
  DOGS_CARD_SECTION.innerHTML = "";
  DOG_NAME_H2.textContent = DOG.name;
  const DOG_IMG = document.createElement("img");
  DOG_IMG.src = DOG.image;
  const DOG_BIO = document.createElement("img");
  DOG_BIO_DIV = createDoggerBio(DOG);
  DOGS_CARD_SECTION.appendChild(DOG_NAME_H2);
  DOGS_CARD_SECTION.appendChild(DOG_IMG);
  DOGS_CARD_SECTION.appendChild(DOG_BIO_DIV);
}

function createDoggerButton(DOG) {
  const DOG_BUTTON_LI = document.createElement("li");
  DOG_BUTTON_LI.classList.add("dogs-list__button");
  DOG_BUTTON_LI.textContent = DOG.name;
  DOGS_LIST_UL.appendChild(DOG_BUTTON_LI);
  DOG_BUTTON_LI.addEventListener("click", function () {
    createDoggerCard(DOG);
  });
}

for (let i = 0; i < data.length; i++) {
  const DOG = data[i];
  createDoggerButton(DOG);
}
