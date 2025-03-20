import "../styles/global.css"
import "../styles/saleproductlist.css"
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
function SaleProductList() {
    return <div>
        <div className="order-by">
            {/*<label htmlFor="sort">Sort by</label>*/}
            <select id="sort">
                <option value="popularity">Sort by Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
        </div>
        <div className="product-list">
            <div className="product-grid">
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
            </div>
        </div>
        <div className="pagination">
            <Pagination/>
        </div>
    </div>;
}

export default SaleProductList;