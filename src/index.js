// console.log(data);

// WRITE YOUR CODE BELOW!

const DOGS_LIST_UL = document.querySelector(".dogs-list");
const DOGS_CARD_SECTION = document.querySelector(".main__dog-section");
const DOG_ADD_BUTTON = document.querySelector(".dogs-list__button--add");

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

function createNaughtyButton(dog) {
  const isNaughtyButton = document.createElement("button");
  if (dog.isGoodDog == true) {
    isNaughtyButton.textContent = "Bad Dog";
  } else {
    isNaughtyButton.textContent = "Good Dog";
  }
  return isNaughtyButton;
}

function createDoggerCard(dog) {
  const dogNameH2 = document.createElement("h2");
  DOGS_CARD_SECTION.innerHTML = "";
  dogNameH2.textContent = dog.name;
  const dogPic = document.createElement("img");
  dogPic.src = dog.image;
  const dogBioDiv = createDoggerBio(dog);
  const dogIsNaughty = createNaughtyText(dog);
  const dogIsNaughtyButton = createNaughtyButton(dog);
  DOGS_CARD_SECTION.append(
    dogNameH2,
    dogPic,
    dogBioDiv,
    dogIsNaughty,
    dogIsNaughtyButton
  );
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

function createForm() {
  const formH2 = document.createElement("h2");
  formH2.textContent = "Add a new dog";
  const form = document.createElement("form");
  form.className = "form";

  const input = document.createElement("input");
  const label = document.createElement("label");
  const textarea = document.createElement("textarea");
  label.for = "name";
  label.textContent = "Dog's name";
  input.type = "text";
  input.id = "name";
  input.name = "name";
  form.append(formH2, label.cloneNode(true), input.cloneNode(true));
  label.for = "image";
  label.textContent = "Dog's picture";
  input.type = "url";
  input.id = "image";
  input.name = "image";
  form.append(label.cloneNode(true), input.cloneNode(true));
  label.for = "bio";
  label.textContent = "Dog's bio";
  textarea.rows = 5;
  textarea.id = "bio";
  textarea.name = "bio";
  form.append(label, textarea);
  input.type = "submit";
  input.id = "submit";
  input.name = "submit";
  input.value = "Let's add a dog!";
  input.className = "form__button";
  form.append(input);
  return form;
}

for (let i = 0; i < data.length; i++) {
  const dog = data[i];
  createDoggerButton(dog);
}

DOG_ADD_BUTTON.addEventListener("click", function () {
  DOGS_CARD_SECTION.innerHTML = "";
  const form = createForm();
  DOGS_CARD_SECTION.appendChild(form);
});
