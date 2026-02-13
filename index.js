  

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

  const navLink=document.querySelectorAll("nav__link")
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}


if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

function action(){
  navMenu.classList.remove("show-menu");
}
navLink.forEach(n=>{
  n.addEventListener("click",action);
})

function scrollhead(){
  const header = document.getElementById("header");

  if(this.scrollY >= 100){
    header.classList.add("scroll-header") 
  }else{
    header.classList.remove("scroll-header")
  }
}
window.addEventListener("scroll",scrollhead);


//shop

// const shop=document.getElementById("shop");

// shop.addEventListener("click",()=>{
//   location.assign="./products/product.html";
// })