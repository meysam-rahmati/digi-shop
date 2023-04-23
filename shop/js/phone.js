
let phones = document.querySelector('#product');


function showproduct() {
    for (let i = 0; i < productArray.length; i++) {
      phones.innerHTML += ` 
            
  <a href="../html/cart.html">
  <div>
      <div class="product" onclick="addtocart( ` + productArray[i].id + `)">
  
          <div class="p-image">
              <img src=" ` + productArray[i].imgSrc + ` ">
          </div>
          <div class="p-title"> ` + productArray[i].name + ` </div>
          <div class="instock"> تعداد باقی مانده در انبار: <span> ` + productArray[i].instock + ` </span>
          </div>
          <div class="price">
              <span class="p-price"> ` + productArray[i].price + ` </span>
              <span class="p-offer"> ` + productArray[i].offer + ` </span>
          </div>
  
      </div>
  </div>
  </a>
       `
    }
  
  }
  showproduct();
  
  function addtocart(id) {
    let item = productArray.find(function (p) {
      return p.id == id
    })
    localStorage.setItem("users", JSON.stringify(item));
  }
  
  