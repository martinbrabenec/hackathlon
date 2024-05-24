const url = 'https://test-api.codingbootcamp.cz/api/becc67a7/events/1/registrations';
const form = document.querySelector('#inputForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    
    // Get form inputs
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const dobInput = document.getElementById('dob');
    
    // Collect input values
    const formDataObject = {
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        dob: dobInput.value
    };
    
    // Stringify form data object
    const formDataString = JSON.stringify(formDataObject);
    
    // Make POST request
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formDataString
    })
    .then(response => response.json())
    .then(data => {
        console.log('Request successful!');
        console.log('Response:', data);
    })
    .catch(error => {
        console.error('Request failed:', error);
    });
});
