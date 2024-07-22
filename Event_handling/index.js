const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    document.querySelector('p').textContent = 'Changed'
})

// double click event
const img = document.querySelector('.toggle')
let toggle = false
img.addEventListener('dblclick', () => {
    if (!toggle) {
        // img.style.visibility = 'hidden'
        img.style.opacity = 0.5
        toggle = true
    } else {
        // img.style.visibility = 'visible'
        img.style.opacity = 1
        toggle = false
    }
})

// mouse over event

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'pink'
})
btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'white'
})


// key down event

const inputBox = document.getElementById('inputField')
inputBox.addEventListener('keydown', (e) => {
    setTimeout(() => {
        console.log(e.target.value);
    }, 0);
})

// key up event

const para = document.querySelector('.fill-data')
const inputBox2 = document.getElementById('inputField2')

inputBox2.addEventListener('keyup', (e) => {
    para.textContent = `${e.target.value}`
})


// form action

const form = document.querySelector('form')
const username = document.getElementById('username')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(username.value, password.value);
})

// change event

const selectPara = document.querySelector('.select-data')
const selectDrop = document.querySelector('.ice-cream')
selectDrop.addEventListener('change', (e) => {
    selectPara.textContent = `${e.target.value}`
})


// event delegation

const ul = document.querySelector('.ul')
ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log(e.target.textContent);
    }
})


// event on parent (that listen event for child)

const cards = document.querySelector('.cards')
const append = document.querySelector('.append')
let num = 1
append.addEventListener('click', () => {
    const div = document.createElement('div')
    div.className = `card ${num}`
    num++
    cards.appendChild(div)
})
cards.addEventListener('click',(e)=>{
    console.log(e.target.className);
})