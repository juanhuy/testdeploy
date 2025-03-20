import  "../styles/order.css";
import React from 'react';
import MyAccountTitle from "../components/MyAccountTitle";
import Navigator from "../components/Navigator";
import Sidebar from "../components/Sidebar";
import OrderList from "../components/OrderList";
function Order() {
    return (<div    >
        <Navigator />
        <MyAccountTitle />
        <div className="content">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="order-list">
                <OrderList />
            </div>
        </div>
    </div>);
}

export default Order;