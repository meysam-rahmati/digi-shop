
let contant = document.querySelector('.p-contant');
let cNav = document.querySelector('.c-nav');
let columnNav = document.querySelector('.column-nav');
let phones = document.querySelector('#product');
let openMenu = document.querySelector('.fa-bars');
let closeMenu = document.querySelector('.fa-xmark');
let menu = document.querySelector('.menu');
let cart = document.querySelector('.cart');






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

let user = JSON.parse(localStorage.getItem("users"));

console.log(user.name);
contant.innerHTML = `
<div class="p-img">
<img src=" ` + user.imgSrc + `">
</div>
<div class="desc">
  <div class="p-desc">
                <h1 class="title"> ` + user.name + `</h1>
                <hr>
                <h2 class="eng">galaxy s10 double</h2>
                <h1>رنگ: <span>آبی</span></h1>
                <h1> ویژگی ها :
                </h1>
                <ul>
                    <li> صفحه نمایش:<span> 255*439 </span></li>
                    <li>اندازه: <span>14inc</span> </li>
                    <li> رزولیشن عکس: <span>25mgpx</span> </li>
                    <li>نسخه سیستم عامل : <span>android</span> </li>
                    <li> اقلام همراه: <span>شارژر و کیف</span> </li>
                </ul>
 </div>
 <div class="cart-box">
      <div class="costomers sell">
           <div class="logo">
                <img  src="../shop-image/logo.png" style = " width:30px ; margin-left : 5px ">
                <h1 style = " font-size:19px " >دیجی کالا</h1>
          </div>
          <div>
                <h1> رضایت مشتری:<span>90%</span></h1>
           </div>
     </div>
        
     <div class="garanti sell">
          <h1>
             <i class="fa-sharp fa-solid fa-shield style = " margin-left : 5px "></i>
             گارانتی 18 ماهه آریان 
          </h1>
     </div>
     <div class="stock sell">
            <a href="#">
             <h1>موجود در انبار دیجی کالا</h1>
            </a>
     </div>
     <div class="score sell">
          <h1>امتیاز در دیجی پی</h1>
     </div>
     <div class="costom">` + user.price + `
     <span class="p-offer"> ` + user.offer + ` </span>
     </div>
     <button>ثبت در کارت</button>
 </div>
</div>`



// cart contant

cart.innerHTML += `
<div class="instock"> تعداد باقی مانده در انبار: <span> ` + user.instock + ` </span>
</div>
<div class="order">
    <button>ثبت در کارت</button>
    <span class="p-price"> ` + user.price + ` </span>
</div>


`