import React from "react";
import "../styles/global.css"
import Navigator from "../components/Navigator";
import SalePageTitle from "../components/SalePageTitle";
import SaleProductList from "../components/SaleProductList";

const Sale: React.FC = () => {
    return (
        <div>
            <Navigator/>
            <SalePageTitle/>
            <SaleProductList/>
        </div>
    );
};


export default Sale;