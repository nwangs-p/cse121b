/* This object stores information about the user. */
let myprofile = {
  name: "Ifeanyi Nwanga",
  favoriteFoods: ["Rice", "Plantain and garden egg"],
  hobbies: ["Singing", "reading news"],
  places: ["Ondo state", "Edo state"]
};

/* This code sets the text content of the element with the id `name` to the user's name. */
document.querySelector("#name").textContent = myprofile.name;

/* This code sets the `src` and `alt` attributes of the element with the id `photo` to the profile picture. */
const profilePicture = "images/place-hold.jpg";
const imageElement = document.querySelector("#photo");
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `profile picture of ${myprofile}`);

/* This code iterates over the user's favorite foods and creates a list item for each food.*/
myprofile.favoriteFoods.forEach(food => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* This code iterates over the user's hobbies and creates a list item for each hobby.*/
myprofile.hobbies.forEach(hobby => {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector("#hobbies").appendChild(li);
});

/* This code iterates over the user's places of residence and creates a list item for each place.*/
myprofile.places.forEach(place => {
  let li = document.createElement("li");
  li.textContent = place;
  document.querySelector("#places-lived").appendChild(li);
});