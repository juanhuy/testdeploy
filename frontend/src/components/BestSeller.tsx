import '../styles/bestseller.css'


function BestSeller() {
    return (<div>
        <p>Bestsellers</p>
        {/*<div className="list-bestseller">*/}
        {/*    <div className="image-container">*/}
        {/*        <img src="/image/home/bestseller/img1.png" className='image1' alt="image1"/>*/}
        {/*        /!*<img src="/image/home/bestseller/img2.png" className='image2' alt="image2"/>*!/*/}
        {/*    </div>*/}
        {/*    <div className="product-infor">*/}
        {/*        <h4 className="name">Electric Floral Maxi</h4>*/}
        {/*        <span className="price">$335.00</span>*/}
        {/*        <span className="price-discount">$167.50</span>*/}
        {/*    </div>*/}
        {/*</div>*/}


        <div className="product-wrapper">
            <div className="image-container">
                <a href="#"> <img src="/image/home/bestseller/img1.png" className='image1' alt="image1"/> </a>
                <a href="#"> <img src="/image/home/bestseller/img2.png" className='image2' alt="image2"/> </a>

                {/*    <div className="wd-buttons wd-pos-r-t">*/}
                {/*        <div className="quick-view wd-action-btn wd-style-icon wd-quick-view-icon">*/}
                {/*            <a href="https://stitched-lb.com/shop/electric-floral-maxi/"*/}
                {/*               className="open-quick-view quick-view-button" rel="nofollow" data-id="23915">Quick view</a>*/}
                {/*        </div>*/}
                {/*        <div className="wd-wishlist-btn wd-action-btn wd-style-icon wd-wishlist-icon">*/}
                {/*            <a className="wd-tltp wd-tooltip-inited" href="https://stitched-lb.com/wishlist/"*/}
                {/*               data-key="d364a39561" data-product-id="23915" rel="nofollow"*/}
                {/*               data-added-text="Browse Wishlist"><span className="wd-tooltip-label">*/}
                {/*		Add to wishlist*/}
                {/*	</span>*/}
                {/*                <span>Add to wishlist</span>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="wd-add-btn wd-add-btn-replace">*/}

                {/*        <a href="https://stitched-lb.com/shop/electric-floral-maxi/" data-quantity="1"*/}
                {/*           className="button product_type_variable add_to_cart_button add-to-cart-loop"*/}
                {/*           data-product_id="23915" data-product_sku="NK2028"*/}
                {/*           aria-label="Select options for “Electric Floral Maxi”" rel="nofollow"><span>Select options</span></a>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<h3 className="wd-entities-title"><a href="https://stitched-lb.com/shop/electric-floral-maxi/">Electric*/}
                {/*    Floral Maxi</a></h3>*/}

                {/*<span className="price"><span className="woocs_price_code" data-product-id="23915"><del><span*/}
                {/*    className="woocommerce-Price-amount amount"><bdi>335.00&nbsp;<span*/}
                {/*    className="woocommerce-Price-currencySymbol">$</span></bdi></span></del><br/><ins><span*/}
                {/*    className="woocommerce-Price-amount amount"><bdi>167.50&nbsp;<span*/}
                {/*    className="woocommerce-Price-currencySymbol">$</span></bdi></span></ins></span></span>*/}
            </div>

        </div>
    </div>);
}

export default BestSeller;