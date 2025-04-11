import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/ProductItem.css';

type Product = {
  name: string;
  img: string;
  price: number;
  description: string;
  color: string;
  sizes: string[];
  images: string[];
  categories: string[];
  additionalInfo: {
    weight: string;
    color: string;
    size: string;
  };
};

const products: Product[] = [
  {
    name: 'AMORINO CROP TOP',
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
  },
  {
    name: 'DEXTER KNIT',
    img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg',
    price: 21.00,
    description: 'A cozy knit set with bold stripes, perfect for casual outings and cool weather.',
    color: 'Multicolor',
    sizes: ['S', 'M', 'L'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg',
      'https://stitched-lb.com/wp-content/uploads/2023/12/ezgif-5-1d8aacd5d3.jpg',
    ],
    categories: ['Clothing', 'Knits'],
    additionalInfo: {
      weight: '0.8 kg',
      color: 'Multicolor',
      size: 'S, M, L',
    },
  },
  {
    name: 'TEDDI SHIRT-SKIRT',
    img: 'https://stitched-lb.com/wp-content/uploads/2024/04/ezgif-5-97b83b6352.jpg',
    price: 89.00,
    description: 'A stylish shirt and skirt set, combining elegance and modern design for a chic look.',
    color: 'Beige',
    sizes: ['XS', 'S', 'M'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2024/04/ezgif-5-97b83b6352.jpg',
      'https://stitched-lb.com/wp-content/uploads/2023/12/ezgif-5-81534c5f39.jpg',
    ],
    categories: ['Clothing', 'Skirts', 'Tops'],
    additionalInfo: {
      weight: '0.6 kg',
      color: 'Beige',
      size: 'XS, S, M',
    },
  },
  {
    name: 'LETTIE MICRO SKIRT',
    img: 'https://stitched-lb.com/wp-content/uploads/2024/04/ezgif-5-78432ed3af.jpg',
    price: 72.50,
    description: 'A vibrant orange top paired with a micro skirt, ideal for a bold and trendy appearance.',
    color: 'Orange',
    sizes: ['XS', 'S', 'M'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2024/04/ezgif-5-78432ed3af.jpg',
      'https://stitched-lb.com/wp-content/uploads/2023/12/ezgif-5-a40dffa10c.jpg',
    ],
    categories: ['Clothing', 'Skirts', 'Tops'],
    additionalInfo: {
      weight: '0.4 kg',
      color: 'Orange',
      size: 'XS, S, M',
    },
  },
  {
    name: 'ABIGAIL DRESS',
    img: 'https://stitched-lb.com/wp-content/uploads/2023/12/ezgif-5-8a6a877359.jpg',
    price: 46.50,
    description: 'A sleek, form-fitting dress in lavender, perfect for winter sports or a stylish getaway.',
    color: 'Lavender',
    sizes: ['S', 'M', 'L'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2023/12/ezgif-5-8a6a877359.jpg',
      'https://stitched-lb.com/wp-content/uploads/2023/12/ezgif-5-a5ad287329.jpg',
    ],
    categories: ['Clothing', 'Dresses'],
    additionalInfo: {
      weight: '0.7 kg',
      color: 'Lavender',
      size: 'S, M, L',
    },
  },
  {
    name: 'OLA BIKINI SHIMMER',
    img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg',
    price: 55.00,
    description: 'A shimmering bikini set, perfect for beach days with a touch of glamour.',
    color: 'Shimmer Blue',
    sizes: ['XS', 'S', 'M'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg',
    ],
    categories: ['Swimwear', 'Bikinis'],
    additionalInfo: {
      weight: '0.3 kg',
      color: 'Shimmer Blue',
      size: 'XS, S, M',
    },
  },
  {
    name: 'KAIMA BIKINI',
    img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg',
    price: 51.00,
    description: 'A sleek and stylish bikini, designed for comfort and confidence at the beach.',
    color: 'Black',
    sizes: ['XS', 'S', 'M'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg',
    ],
    categories: ['Swimwear', 'Bikinis'],
    additionalInfo: {
      weight: '0.3 kg',
      color: 'Black',
      size: 'XS, S, M',
    },
  },
  {
    name: 'CELESTIAL HALTER TOP - BLACK',
    img: 'https://stitched-lb.com/wp-content/uploads/2024/05/ezgif-6-d2c2ef9fa5-533x800.jpg',
    price: 74.00,
    description: 'A black halter top with a celestial design, perfect for a bold beach look.',
    color: 'Black',
    sizes: ['XS', 'S', 'M'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2024/05/ezgif-6-d2c2ef9fa5-533x800.jpg',
    ],
    categories: ['Swimwear', 'Tops'],
    additionalInfo: {
      weight: '0.4 kg',
      color: 'Black',
      size: 'XS, S, M',
    },
  },
  {
    name: 'AKAL BIKINI',
    img: 'https://stitched-lb.com/wp-content/uploads/2023/07/6409a86c03b0f-533x800.jpg',
    price: 51.50,
    description: 'A vibrant bikini set, designed to make a statement at the beach.',
    color: 'Red',
    sizes: ['XS', 'S', 'M'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2023/07/6409a86c03b0f-533x800.jpg',
    ],
    categories: ['Swimwear', 'Bikinis'],
    additionalInfo: {
      weight: '0.3 kg',
      color: 'Red',
      size: 'XS, S, M',
    },
  },
  {
    name: 'NONI',
    img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629df1691f5ce-640x640.png',
    price: 49.00,
    description: 'A stylish accessory to complement your outfit, perfect for any occasion.',
    color: 'White',
    sizes: ['One Size'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2023/07/629df1691f5ce-640x640.png',
    ],
    categories: ['Accessories'],
    additionalInfo: {
      weight: '0.2 kg',
      color: 'White',
      size: 'One Size',
    },
  },
  {
    name: 'SUNNY',
    img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629df2f85a976-640x640.png',
    price: 49.00,
    description: 'A sunny accessory to brighten up your look, ideal for summer outings.',
    color: 'Yellow',
    sizes: ['One Size'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2023/07/629df2f85a976-640x640.png',
    ],
    categories: ['Accessories'],
    additionalInfo: {
      weight: '0.2 kg',
      color: 'Yellow',
      size: 'One Size',
    },
  },
  {
    name: 'HATSUN',
    img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629dfd8b99cd4-640x640.png',
    price: 35.00,
    description: 'A chic hat to add a touch of elegance to your outfit.',
    color: 'Beige',
    sizes: ['One Size'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2023/07/629dfd8b99cd4-640x640.png',
    ],
    categories: ['Accessories', 'Hats'],
    additionalInfo: {
      weight: '0.3 kg',
      color: 'Beige',
      size: 'One Size',
    },
  },
  {
    name: 'GRETA',
    img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629df66c752a2-640x640.png',
    price: 49.00,
    description: 'A versatile accessory to elevate your style, suitable for any season.',
    color: 'Black',
    sizes: ['One Size'],
    images: [
      'https://stitched-lb.com/wp-content/uploads/2023/07/629df66c752a2-640x640.png',
    ],
    categories: ['Accessories'],
    additionalInfo: {
      weight: '0.2 kg',
      color: 'Black',
      size: 'One Size',
    },
  },
];

const ProductItem: React.FC = () => {
  const { productName } = useParams<{ productName: string }>();
  console.log('Product Name from URL:', productName);

  const product = products.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === productName
  );
  console.log('Found Product:', product);

  if (!product) {
    return <div>Product not found</div>;
  }

  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [relatedPage, setRelatedPage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const relatedProducts: Product[] = [];
  
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
            <p>{product.description}</p>
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

  const breadcrumbPaths = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: product.categories[0] || 'Clothing', path: `/shop/${(product.categories[0] || 'clothing').toLowerCase()}` },
    { label: product.name, path: `/product/${product.name.toLowerCase().replace(/\s+/g, '-')}` },
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

      {/* <div className="related-products">
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
      </div> */}
      
    </div>
  );
};

export default ProductItem;