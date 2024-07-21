const changetxt = document.getElementById('change')
changetxt.textContent = 'changed'

// change color of box through js
const changeColor = document.querySelector('.bg-color')
changeColor.style.backgroundColor = 'orange'


// insert new h4 element through js 
const h4 = document.createElement('h4')
h4.textContent = 'Generated through javascript'
document.body.append(h4)

// insert new element into ul
const ul = document.querySelector('ul')
const li = document.createElement('li')
li.textContent = 'Item-2'
ul.append(li)


// remove element

// const bgBox = document.querySelector('.bg-color')
// bgBox.remove()


// removing last child of specific element

const ul2 = document.querySelector('.ele')
ul2.removeChild(ul2.querySelector('li:last-child'))
// ul2.removeChild(ul2.querySelector('li:nth-child(2)'))



// change src of image

const img = document.querySelector('.img')
img.src = './img-2.avif'


// change class name of html element

const div = document.createElement('div')
div.className = 'first second'
document.body.append(div)

div.classList.remove('second')


// event handling

const btn = document.querySelector('.btn')
const para = document.querySelector('.para').getElementsByTagName('p')[0]
btn.addEventListener('click',()=>{
    para.textContent = 'BOOM !'
})


document.querySelector('.para').addEventListener('mouseover',()=>{
    document.querySelector('.para').style.borderColor = 'green'
})