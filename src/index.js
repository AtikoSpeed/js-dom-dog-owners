// console.log(data);

// WRITE YOUR CODE BELOW!

const DOGS_LIST_UL = document.querySelector(".dogs-list");
const DOGS_CARD_SECTION = document.querySelector(".main__dog-section");

function createDoggerCard(DOG) {
  const DOG_NAME_H2 = document.createElement("h2");
  DOGS_CARD_SECTION.innerHTML = "";
  DOG_NAME_H2.textContent = DOG.name;
  const DOG_IMG = document.createElement("img");
  DOG_IMG.src = DOG.image;
  DOGS_CARD_SECTION.appendChild(DOG_NAME_H2);
  DOGS_CARD_SECTION.appendChild(DOG_IMG);
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
