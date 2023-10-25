const userContainer = document.getElementById('user-container');
const generateButton = document.getElementById('generate');

// Define an array to store the random users.
const users = [];

generateButton.addEventListener('click', () => {
  // Fetch random user data and add each user to the users array.
  fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
      for (const user of data.results) {
        users.push(user);
      }

      // Use the filter() array method to filter the users array and include users from United States only.
      const usersFromUS = users.filter(user => user.location.country === 'United States');

      // Randomly select one user from the filtered list.
      const randomUser = usersFromUS[Math.floor(Math.random() * usersFromUS.length)];

      //Randomly display the user .
      userContainer.innerHTML = `
        <img src="${randomUser.picture.large}" alt="User Image">
        <h2>${randomUser.name.first} ${randomUser.name.last}</h2>
        <p>Email: ${randomUser.email}</p>
        <p>Location: ${randomUser.location.city}, ${randomUser.location.state}</p>
      `;
    })
    .catch(error => console.error('Error:', error));
});