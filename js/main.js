const humburger = document.getElementById('hum');
const nav = document.querySelector('.my-nav')

humburger.addEventListener('click',()=>{
      if (humburger.className.includes('open')){
            humburger.className= humburger.className.replace('open','closed')
            nav.style.right = '-200vh'
      }else{
            nav.style.right=0
            humburger.className= humburger.className.replace('closed','open')
      }
      
})




$(document).on('ready', function() {
      $(".regular").slick({
            dots: false,
            // autoplay:true,
            Arrows:true,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,

            
            responsive: [
                  {
                  breakpoint: 992,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                  }
                  },
                  {
                  breakpoint: 480,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                  }
                  }
                  ]
          }); 

          $(".daphne").slick({
            dots: false,
            infinite: true,
            autoplay:true,
            slidesToShow: 3,
            arrows: true,
            slidesToScroll: 1,
             
            responsive: [
                  {
                  breakpoint: 768,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  slidesToShow: 4,
                  centerPadding: '10px',
                  slidesToShow: 2
                  }
                  },
                  {
                  breakpoint: 480,
                  settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
                  }
                  }
                  ]

          })

})


const btns = document.querySelectorAll('.accordion__btn');
const answers = document.querySelectorAll('.accordion__answer__container');
const icons= document.querySelectorAll('.fa');



for(let i=0;i < btns.length;i++) {
  
  btns[i].addEventListener('click', function () {
    for(let j=0;j < btns.length;j++) {
      if(j !== i){
        answers[j].classList.remove('active__accordion');
        icons[j].classList.add('fa-plus');
        icons[j].classList.remove('fa-minus');  } 
    }
    answers[i].classList.toggle('active__accordion');
    icons[i].classList.toggle('fa-plus');
    icons[i].classList.toggle('fa-minus');
    });
}