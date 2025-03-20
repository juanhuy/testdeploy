import '../styles/bestseller.css'
import  "../components/ProductCards"
import ProductCards from "./ProductCards";


function BestSeller() {
    return (<div className="bestseller">
        <h2 className="bestseller-title">Bestsellers</h2>
        <div className="product-list">
            <div className="product-grid">
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
                <ProductCards/>
            </div>
        </div>
    </div>);
}

export default BestSeller;