const createFooter = () =>{
    let footer = document.querySelector('footer');
    footer.innerHTML =`

    <div class="footer-left">

        <h3>TechNepal</h3>

        <p class="footer-links">
            <a href="#" class="link-1">Laptop</a>
            
            <a href="#">Headphone</a>
        
            <a href="#">Mobile</a>
        
            <a href="#">Accessories</a>
            
            <a href="#">Tablets</a>
            
            <a href="#">PC</a>
        </p>

        <p class="footer-company-name">TechNepal © 2022</p>
    </div>

    <div class="footer-center">

        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Shop no 43, Alife Mall,</span> Chabel, Kathmandu</p>
        </div>

        <div>
            <i class="fa fa-phone"></i>
            <p>9808123456</p>
        </div>

        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">technepal@technepal.cpt.com</a></p>
        </div>

    </div>

    <div class="footer-right">

        <p class="footer-company-about">
            <span>About the company</span>
            One of Nepal's best technology and digital lifestyle retail portals is TechNepal. It offers the latest collection of electronics and electronic products at the most cheap prices, emulating an online shopping experience.
        </p>

        <div class="footer-icons">

            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>

        </div>

    </div>

    `;
}
createFooter();