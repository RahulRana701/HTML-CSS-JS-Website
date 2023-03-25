let bg=document.querySelector(".burger");
let a=document.querySelector(".bts");
let b=document.querySelector(".logo");
let c=document.querySelector(".navbarlist");
let d=document.querySelector(".navbar");



bg.addEventListener('click',()=>{
    a.classList.toggle('v-class');
    b.classList.toggle('v-class');
    c.classList.toggle('v-class');
    d.classList.toggle('h-class');
})


