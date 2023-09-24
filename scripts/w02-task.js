/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Ifeanyi Nwanga";

const currentYear = new Date().getFullYear();

//the file path and file name of the image.
const profilePicture = "images/place-hold.jpg"; 

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");

/* Step 4 - Adding Content */

//Assign the nameElement's innerHTML property the fullName variable value.
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

//the profile image element.
const imageElement = document.querySelector("img");
//the src property of the image element.
imageElement.setAttribute("src", profilePicture);
//alt property of the image element.
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

//Favorite foods Array.
const favoriteFoods = ["Beans", "Yam", "Rice"];

//Favorite food display.
foodElement.innerHTML = favoriteFoods.join(' | ')  + foodElement.innerHTML;

//Add another favorite food to th array.
const newFavoriteFood = "Fried Egg & Bread";

//Value to append the new fav food.
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += "<br>" + favoriteFoods.join(' | ');

//Remove the first element in the favorite food array.
favoriteFoods.shift();
foodElement.innerHTML += "<br>" + favoriteFoods.join(' | ');

//Remove the last element in the favorite food array.
favoriteFoods.pop();
foodElement.innerHTML += "<br>" + favoriteFoods.join(' | ');




