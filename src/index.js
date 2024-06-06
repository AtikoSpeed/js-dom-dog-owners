// console.log(data);

// WRITE YOUR CODE BELOW!

const DOGS_LIST_UL = document.querySelector(".dogs-list");
const DOGS_CARD_SECTION = document.querySelector(".main__dog-section");

function createDoggerBio(dog) {
  const dogBioDiv = document.createElement("div");
  dogBioDiv.classList.add("main__dog-section__desc");
  const bioTitleH3 = document.createElement("h3");
  bioTitleH3.textContent = "Bio";
  const bioTextP = document.createElement("p");
  bioTextP.textContent = dog.bio;
  dogBioDiv.appendChild(bioTitleH3);
  dogBioDiv.appendChild(bioTextP);
  return dogBioDiv;
}

function createNaughtyText(dog) {
  const isNaughtyP = document.createElement("p");
  if (dog.isGoodDog == true) {
    isNaughtyP.innerHTML = "<em>Is naughty?</em> No!";
  } else {
    isNaughtyP.innerHTML = "<em>Is naughty?</em> Yes!";
  }
  return isNaughtyP;
}

function createDoggerCard(dog) {
  const dogNameH2 = document.createElement("h2");
  DOGS_CARD_SECTION.innerHTML = "";
  dogNameH2.textContent = dog.name;
  const dogPic = document.createElement("img");
  dogPic.src = dog.image;
  dogBioDiv = createDoggerBio(dog);
  dogIsNaughty = createNaughtyText(dog);
  DOGS_CARD_SECTION.appendChild(dogNameH2);
  DOGS_CARD_SECTION.appendChild(dogPic);
  DOGS_CARD_SECTION.appendChild(dogBioDiv);
  DOGS_CARD_SECTION.appendChild(dogIsNaughty);
}

function createDoggerButton(dog) {
  const dogButtonLi = document.createElement("li");
  dogButtonLi.classList.add("dogs-list__button");
  dogButtonLi.textContent = dog.name;
  DOGS_LIST_UL.appendChild(dogButtonLi);
  dogButtonLi.addEventListener("click", function () {
    createDoggerCard(dog);
  });
}

for (let i = 0; i < data.length; i++) {
  const dog = data[i];
  createDoggerButton(dog);
}
