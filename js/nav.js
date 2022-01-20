const creatNav = () =>{
    let nav = document.querySelector('.navbar');
    nav.innerHTML =`
    <div class="nav">
        <a class="brand-logo" alt="" href="index.html">TechNepal</a>
    <!-- Search Box -->
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Search product">
                <button class="search-btn"><a href="search.html">Search</a></button>
            </div>
            <a href="signup.html"><img src="img/user.png" alt=""></a>
            <a href="cart.html"><img src="img/cart.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="product.html" class="link">Product</li>
        <li class="link-item"><a href="categories.html" class="link">Categories</li>
        <li class="link-item"><a href="blog.html" class="link">Blog</li>
        <li class="link-item"><a href="research.html" class="link">Research</li>
        <li class="link-item"><a href="contactus.html" class="link">ContactUs</li>
    </ul>
    `;
}
creatNav();