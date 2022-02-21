var swiper = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       798:{
         slidesPerView: 3,
       },
       598:{
         slidesPerView: 2,
       }
    }
});