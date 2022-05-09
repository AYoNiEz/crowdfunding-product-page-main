const submit = document.querySelector('.continue');
const thank = document.querySelector('.thank-you');
const gotIt = document.querySelector('.gotit');
const projectContainer2 = document.querySelector('.project-container');


submit.addEventListener('click', openThank)
gotIt.addEventListener('click', closeThank)

function openThank(event){
    thank.classList.add('show')
    projectContainer2.classList.remove('active');
}

function closeThank(event){
    thank.classList.remove('show')
    
}

