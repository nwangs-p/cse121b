const userContainer = document.getElementById('user-container');
const generateButton = document.getElementById('generate');



generateButton.addEventListener('click', () => {
    

    // Use Fetch to get random user data
    // fetch('https://randomuser.me/api/?gender=female&nationality=us&age=25')
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            // Generate HTML using template literals
            const userHtml = `
                <img src="${user.picture.large}" alt="User Image">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>Email: ${user.email}</p>
                <p>Location: ${user.location.city}, ${user.location.state}</p>
            `;

            userContainer.innerHTML = userHtml;

           
            // h2.style.color = 'white';
            // p.style.color = 'red';
        })
        .catch(error => console.error('Error:', error));
});