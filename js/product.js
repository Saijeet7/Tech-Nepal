const productImages = document.querySelectorAll(".product-images");
const productImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, i) =>{
    item.addEventListener('click', ()=>{
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

//Toggle storage button
const sizeBtns = document.querySelectorAll(".storage-radio-btn");
let checkedBtn = 0;

sizeBtns.forEach((item, i) =>{
    item.addEventListener('click',() =>{
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;    
    })
})

//Toggle ram button
const sizeBtns = document.querySelectorAll(".ram-radio-btn");
let checkedBtn = 0;

sizeBtns.forEach((item, i) =>{
    item.addEventListener('click',() =>{
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;    
    })
})
