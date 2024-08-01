// Task - 7


const username = document.getElementById('username')
const email = document.getElementById('email')
const form = document.querySelector('form')
const nameBox = document.querySelector('.name')
const emailBox = document.querySelector('.email')

let obj = {}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    obj.name = username.value;
    obj.email = email.value;

    sessionStorage.setItem('formData',JSON.stringify(obj))

    username.value = '';
    email.value = '';

    displayData();
    
})


function displayData(){
    const res = JSON.parse(sessionStorage.getItem('formData'))
    if(res){
        nameBox.textContent = res.name;
        emailBox.textContent = res.email;
    }
}


window.addEventListener('DOMContentLoaded',displayData)








// Task - 8


console.log(JSON.parse(sessionStorage.getItem('formData')));
sessionStorage.removeItem('formData')
console.log(JSON.parse(sessionStorage.getItem('formData')));
