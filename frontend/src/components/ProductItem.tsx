import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/ProductItem.css';

const ProductItem: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [relatedPage, setRelatedPage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    name: 'Amorino Crop Top',
    img: 'https://stitched-lb.com/wp-content/uploads/2025/03/BAOBAB-green-skirt.webp',
    price: 415.00,
    description: 'The "Amorino Crop Top" in Emerald — a chic halter neck top with an open back and crossed detailing.',
    color: 'Emerald',
    sizes: ['XS', 'S', 'M'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2025/03/BAOBAB-green-skirt.webp',
      'https://stitched-lb.com/wp-content/uploads/2025/03/26795C_CREAM_15.webp',
      'https://stitched-lb.com/wp-content/uploads/2025/03/26771_BLUETIEDYE_16.webp',
    ],
    categories: ['Clothing', 'Skirts', 'Tops', 'New Arrivals'],
    additionalInfo: {
      weight: '0.5 kg',
      color: 'Green',
      size: 'XS, S, M',
    },
  };

  const relatedProducts: { name: string; img: string; price: string | number }[] = [
    { name: 'Gem Pants', img: 'https://stitched-lb.com/wp-content/uploads/2025/03/GEM-PANT.webp', price: '190.00 $' },
    { name: 'Riri Maxi Dress', img: 'https://stitched-lb.com/wp-content/uploads/2025/03/GREEN-DRESS.webp', price: '315.00 $' },
    { name: 'Denim Star Tie Dye Boyfriend Longsleeve Tee - Cream', img: 'https://stitched-lb.com/wp-content/uploads/2025/03/26795C_CREAM_15.webp', price: '195.00 $' },
    { name: 'Rouge Love Kobe Tee - Blue Tie Dye', img: 'https://stitched-lb.com/wp-content/uploads/2025/03/26771_BLUETIEDYE_16.webp', price: '150.00 $' },
    { name: 'Denim Star Tie Dye Oversized Tank Top', img: 'https://stitched-lb.com/wp-content/uploads/2025/03/star-1.webp', price: '175.00 $' },
    { name: 'HANNAH CARDIGAN', img: 'https://stitched-lb.com/wp-content/uploads/2024/10/0-1.jpg', price: '50.00 $' },
    { name: 'Elixir Maxi Skirt', img: 'https://stitched-lb.com/wp-content/uploads/2024/09/elixir-maxi-skirt-816890.webp', price: '245.00 $' },
    { name: 'FRINGE HALTER NECK TOP – SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2024/08/ezgif-2-89d1729a61.jpg', price: '1,350.00 $' },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(relatedProducts.length / itemsPerPage);
  const currentRelatedProducts = relatedProducts.slice(
    relatedPage * itemsPerPage,
    (relatedPage + 1) * itemsPerPage
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="tab-content">
            <p>
              Featuring a Baobab-shaped accent, this cropped piece exudes modern elegance and bold style. The vibrant hue adds a striking touch, perfect for any occasion that calls for sophistication and edge.
            </p>
            <p>BAOBAB-LEBON</p>
          </div>
        );
      case 'additional':
        return (
          <div className="tab-content additional-info">
            <table>
              <tbody>
                <tr>
                  <td>Weight</td>
                  <td>{product.additionalInfo.weight}</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>{product.additionalInfo.color}</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>{product.additionalInfo.size}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'reviews':
        return (
          <div className="tab-content reviews">
            <p>Only logged in customers who have purchased this product may leave a review.</p>
            <h3>REVIEWS</h3>
            <p>There are no reviews yet.</p>
          </div>
        );
      default:
        return null;
    }
  };

  // Breadcrumb paths and their corresponding routes
  const breadcrumbPaths = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Clothing', path: '/shop/clothing' },
    { label: 'Skirts', path: '/shop/clothing/skirts' },
    { label: product.name, path: '/shop/clothing/skirts/amorino-crop-top' },
  ];

  return (
    <div className="product-page">
      <div className="product-main">
        <div className="product-images">
          <div className="thumbnail-gallery">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={product.images[currentImage]} alt={product.name} />
          </div>
        </div>

        <div className="product-details">
          <div className="breadcrumb">
            {breadcrumbPaths.map((item, index) => (
              <span key={item.path}>
                {index < breadcrumbPaths.length - 1 ? (
                  <>
                    <Link to={item.path} className="breadcrumb-link">
                      {item.label}
                    </Link>
                    <span> / </span>
                  </>
                ) : (
                  <span>{item.label}</span>
                )}
              </span>
            ))}
          </div>
          <h1>{product.name}</h1>
          <p className="price">{product.price.toFixed(2)}$</p>
          <p className="description">{product.description}</p>

          <div className="color-selection">
            <span>Color: </span>
            <div className="color-circle" style={{ backgroundColor: '#2E8B57' }}></div>
          </div>

          <div className="size-selection">
            <span>Size: </span>
            {product.sizes.map((size) => (
              <button key={size} className="size-button">
                {size}
              </button>
            ))}
          </div>

          <div className="quantity-selection">
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart">ADD TO CART</button>
            <button className="buy-now">BUY NOW</button>
          </div>


          <div className="product-meta">
            <p>SKU: N/A</p>
            <p>Categories: {product.categories.join(', ')}</p>
            <div className="share">
              <span>Share: </span>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          DESCRIPTION
        </button>
        <button
          className={`tab ${activeTab === 'additional' ? 'active' : ''}`}
          onClick={() => setActiveTab('additional')}
        >
          ADDITIONAL INFORMATION
        </button>
        <button
          className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          REVIEWS (0)
        </button>
      </div>

      {renderTabContent()}

      <div className="related-products">
        <h2>Related products</h2>
        <div className="related-products-grid">
          {currentRelatedProducts.map((item, index) => (
            <div key={index} className="related-product-item">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <p className="price">{typeof item.price === 'number' ? item.price.toFixed(2) : parseFloat(item.price).toFixed(2)}$</p>
            </div>
          ))}
        </div>
        <div className="pagination-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot ${relatedPage === index ? 'active' : ''}`}
              onClick={() => setRelatedPage(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;