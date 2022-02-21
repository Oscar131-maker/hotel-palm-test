/* Vars */
const navMenu = document.querySelector("#principal-header");
const btnMenu = document.querySelector("#btn-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector("#principal-header .list-container");
const logo = document.querySelector('#logo-menu');

/* Event listeners */
EventListener();
function EventListener(){
   
  //Change color menu
  changeColorMenu();

  //Responsive menu
  responsiveMenu();

}

/* Functions */

//Responsive menu
function responsiveMenu(){
   btnMenu.addEventListener('click', () => {
      menu.classList.replace('hide-mobile-menu', 'mobile-menu');
   });

   closeMenu.addEventListener('click', () => {
      menu.classList.replace('mobile-menu', 'hide-mobile-menu');
   });
} 

//Change color menu
function changeColorMenu(){

  window.onscroll = () => {

     //Vars
     const positionHeader = window.pageYOffset;
     const logoWhite = 'http://127.0.0.1:5500/assets/logo-transparent-menu.png';
     const logoColor = 'http://127.0.0.1:5500/assets/logo-white-menu.png';

     if(positionHeader > 100){
        navMenu.className = 'menu-white';
        btnMenu.style.stroke = '#131313';

        if(navMenu.classList !== 'menu-white'){
           logo.children[0].src = logoColor;
        }

     }else{
        navMenu.className = 'menu-transparent';
        btnMenu.style.stroke = '#ffffff';

        if(navMenu.classList !== 'menu-transparent'){
           logo.children[0].src = logoWhite;
        }
     }
     
  }

}



