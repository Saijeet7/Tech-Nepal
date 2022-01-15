const productContainer = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i)=>{
    let containerDimenstions = item.getBoundingClientRect();
    let contanerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += contanerWidth;
    })

    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= contanerWidth;
    })
})