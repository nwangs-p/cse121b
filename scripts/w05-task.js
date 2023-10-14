/* W05: Programming Tasks */

// Declare the variables.
const templesElement = document.querySelector('#temples');
const templeList = [];


const displayTemples = (temples) => {
  temples.forEach(temple => {
    // Create an HTML <article> element.
    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = `${temple.templeName}Temple`;
    // h3.style.textAlign = "center"
    // h3.style.position = "relative"
    // h3.style.bottom = "25"


    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

  
    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

const getTemples = async () => {
  // Fetch the temple data.
  const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
  templeList.push(...await response.json());

 
  displayTemples(templeList);
};



const reset = () => {
  // While the templesElement has a child element, remove it.
  while (templesElement.firstChild) {
    templesElement.removeChild(templesElement.firstChild);
  }
};


const sortBy = (temples) => {
  reset(); // Clear the displayed list of temples
  const filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "utah":
      const utahTemples = temples.filter(temple => temple.location.includes('Utah'));
      displayTemples(utahTemples);
      break;

    case "notutah":
      const nonUtahTemples = temples.filter(temple => !temple.location.includes('Utah'));
      displayTemples(nonUtahTemples);
      break;

    case "older":
      const olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
      displayTemples(olderTemples);
      break;
      break;

    case "all":
      displayTemples(temples);
      break;

    default:
      // Handle unknown filter value or any other cases
      console.log("Unknown filter: " + filter);
      break;
  }
};


/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

getTemples();
