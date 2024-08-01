
console.log('Working...');

const username = document.getElementById('username');
const email = document.getElementById('email');
const form = document.getElementById('myForm');
const dataDisplay = document.getElementById('dataDisplay');

const obj = {};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    obj.name = username.value;
    obj.email = email.value;
    console.log(obj);
    localStorage.setItem('formData', JSON.stringify(obj));

    username.value = '';
    email.value = '';

    console.log('Data Saved into LocalStorage...');

    displayData();
});

function displayData() {
    const response = JSON.parse(localStorage.getItem('formData'));
    if (response) {
        dataDisplay.innerHTML = `<h2>Name: ${response.name}, Email-ID: ${response.email}</h2>`;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    displayData();
});







// Task - 4

console.log(`Before :`,JSON.parse(localStorage.getItem('formData')));
localStorage.removeItem('formData')
console.log(`After :`,JSON.parse(localStorage.getItem('formData')));