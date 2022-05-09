const navBar = document.querySelector('.navbar-wrapper')
const hamburger = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close')
const wrapper = document.querySelector('.navbar')
const slider = document.querySelector('.slider-bar')
const headSub = document.querySelector('.head-sub-menu')
var progress = document.getElementById("progress")
const bookMarkButton = document.querySelector(".bookmark")
const bookMarkText = document.querySelector(".bookmark-text")
const bookMarkLogo = document.querySelector(".bookmark-logo")
const innerLogo = document.querySelector(".bookmark-inner-logo")


hamburger.addEventListener('click', clickOpen);
closeMenu.addEventListener('click', clickClose);
bookMarkButton.addEventListener('click', bookMarked);


function clickOpen(event){
    navBar.classList.add('active');
    closeMenu.classList.add('active');
    hamburger.classList.add('hide');
    wrapper.classList.add('active');
    headSub.classList.add('active');
}

function clickClose(event){
    navBar.classList.remove('active');
    closeMenu.classList.remove('active');
    hamburger.classList.remove('hide');
    headSub.classList.remove('active');
}


function bookMarked(event){
    if (bookMarkText.innerHTML === "Bookmark") {
        bookMarkText.innerHTML = "Bookmarked";
        bookMarkText.classList.add('active');
        bookMarkLogo.classList.add('active');
        innerLogo.classList.add('show');
      } else {
        bookMarkText.innerHTML = "Bookmark";
        bookMarkText.classList.remove('active');
        bookMarkLogo.classList.remove('active');
        innerLogo.classList.remove('show');
      }

   
      
    
}



slider.innerHTML = this.value;
slider.oninput = function(){
    progress.style.width = this.value + "%";
} 



