const projectContainer = document.querySelector('.project-container');
const backProject = document.querySelector('.project');
var close = document.getElementById('close-project');

backProject.addEventListener('click', openProject);
close.addEventListener('click', closeProject);

function openProject(event) {
    projectContainer.classList.add('active');
}
function closeProject(event) {
    projectContainer.classList.remove('active');
}

const selectBox = document.querySelector('.project-box');
const tikBox = document.querySelector('.circle-tik');
const selectBox2 = document.querySelector('.project-box2');
const tikBox2 = document.querySelector('.circle-tik2');
const selectBox3 = document.querySelector('.project-box3');
const tikBox3 = document.querySelector('.circle-tik3');
var line1 = document.getElementById('enter-line1');
const enter1 = document.querySelector('.enter1');
const enter2 = document.querySelector('.enter2');
var line2 = document.getElementById('enter-line2');

tikBox.addEventListener('click', openBox)

function openBox(event){
    selectBox.classList.add('select');
    tikBox.classList.add('active');
}

tikBox2.addEventListener('click', openBox2)
function openBox2(event){
    selectBox2.classList.add('select');
    tikBox2.classList.add('active');
    enter1.classList.add('show1');
    line1.classList.add('show1');
}
tikBox3.addEventListener('click', openBox3)

function openBox3(event){
    selectBox3.classList.add('select');
    tikBox3.classList.add('active');
    enter2.classList.add('show');
    line2.classList.add('show');
}