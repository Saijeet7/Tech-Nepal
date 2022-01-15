const creatNav = () =>{
    let nav = document.querySelector('.navbar');
    nav.innerHTML =`
    <div class="nav">
        <a class="brand-logo" alt="">TechNepal</a>
    <!-- Search Box -->
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Search product">
                <button class="search-btn">Search</button>
            </div>
            <a href="#"><img src="img/user.png" alt=""></a>
            <a href="#"><img src="img/cart.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Product</li>
        <li class="link-item"><a href="#" class="link">Blog</li>
        <li class="link-item"><a href="#" class="link">About Us</li>
    </ul>
    `;
}
creatNav();