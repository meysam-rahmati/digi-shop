let cNav = document.querySelector('.c-nav');
let columnNav = document.querySelector('.column-nav');
let contant = document.querySelector('.p-contant');
let openMenu = document.querySelector('.fa-bars');
let closeMenu = document.querySelector('.fa-xmark');
let menu = document.querySelector('.menu');
let slider = document.querySelector('.slider')
let innerSlider = document.querySelector('.slider-inner')  

let pressed = false ; 
let startx;
let x ;

slider.addEventListener('mousedown', (e)=>{
  pressed = true;
  startx = e.offsetX - innerSlider.offsetLeft;
  slider.style.cursor = "grabbing "
});
slider.addEventListener('mouseenter', ()=>{
  slider.style.cursor = "grab "

})
slider.addEventListener('mouseup', ()=>{
  slider.style.cursor = "grab "
})

  
window.addEventListener('mouseup' , ()=>{
  pressed = false;
});

 
slider.addEventListener('mousemove', (e)=>{
  if(!pressed) return;
  e.preventDefault();
  x = e.offsetX
  innerSlider.style.left = `${x - startx}px`; 
   checkboundary()
});

function checkboundary(){
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if(parseInt(innerSlider.style.left) > 0){
    innerSlider.style.left = '0px';
  }else if(inner.right < outer.right){
    innerSlider.style.left = ` -${inner.width - outer.width}px `;
  }

}




function show() {
  columnNav.style.top = "168px";
  columnNav.style.display = "flex";
}

function hide() {
  columnNav.style.top = "-700px"
  columnNav.style.display = "none";
}

cNav.addEventListener('mouseover', function () {
  show();
})

cNav.addEventListener('mouseout', function () {
  hide()
})

columnNav.addEventListener('mouseover', function () {
  show();
})

columnNav.addEventListener('mouseout', function () {
  hide()

})





openMenu.addEventListener('click', function () {
  menu.style.right = '0'
  openMenu.style.display = 'none'
})
closeMenu.addEventListener('click', function () {
  menu.style.right = '-250px'
  openMenu.style.display = "inline"
}
)


// JQUERY CODES FOR NAVBAR

// $(document).ready(()=>{
//  $('.c-nav').mouseenter(()=>{
//     $('.column-nav').toggle();
//     $('.column-nav').css('display' , 'flex');

// })

// $('.column-nav').mouseleave(()=>{
//     $('.column-nav').hide();
//     $('.column-nav').css('display' , 'none');
//  })

// });



// SLIDER CODS










// SHOW PRODUCT
