

const changeSize = document.querySelector('.mess-with-me');
changeSize.style.fontSize = '3em';
changeSize.style.backgroundColor = 'green';

const hide = document.querySelector('#hide-me-area');
hide.style.display = 'none';

const changeWidth = document.querySelector('#triceratops');
changeWidth.style.width = '325px';


const makeOrange = function() {
    changeSize.style.color = 'orange';
}
changeSize.addEventListener('click', makeOrange);

const redBorder = function() {
    changeWidth.style.border = '2px solid red';
}
changeWidth.addEventListener('click', redBorder);

const featheredDino = document.querySelector('#feathers');
const transparent = function() {
    featheredDino.style.opacity = '0.5'
}
featheredDino.addEventListener('click', transparent);

const backGround = document.querySelector('#row');
const button = document.querySelector('#toggle');
const changeBackground = function() {
    backGround.style.backgroundColor = 'blue';
}
// const switchBack = function() {
//     backGround.style.backgroundColor = 'none'
// }
button.addEventListener('click', changeBackground);
// button.removeEventListener('click', switchBack)


const biggify = document.querySelector('#biggify');
const makeBigger = function() {
    biggify.style.width = '200px'
}
biggify.addEventListener('mouseover', makeBigger);

