import "../styles/sidebar.css"

function Sidebar() {
    return (<div className="sidebar">
        <h3>MY ACCOUNT</h3>
        <div className="link">
            <a href="#">Orders</a>
            <a href="#">Addresses</a>
            <a href="#">Account detail</a>
            <a href="#">Logout</a>
        </div>
    </div>)
}

export default Sidebar