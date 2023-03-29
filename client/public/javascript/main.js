/**Javascript for index page */

// toggle menu 
const menu = document.getElementById('navshow');
const menubtn = document.getElementById('menu');
const body = document.querySelector('body');

menubtn.addEventListener('click', () =>{
    menu.classList.toggle('hidden');
    // menu.Filter = 'grayscale(110%)';
    console.log('hey');
})

//Get modal

const modal = document.getElementById('myModal');
const modalbtn = document.querySelectorAll('#modalBtn');
const closebtn = document.getElementById('close')

// modalbtn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     modal.style.display = "block";
// });
let clickEvent = (e) => {
    e.preventDefault();
    modal.style.display = "block";
}

modalbtn.forEach((item) =>{
    item.addEventListener('click', clickEvent)
})

closebtn.addEventListener('click', () =>{
    modal.style.display = "none";
})