import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/RelatedProduct.css"; // Import your CSS file for styling


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

const relatedProductsData: Product[] = [
    {
      name: 'Gem Pants',
      img: 'https://stitched-lb.com/wp-content/uploads/2025/03/GEM-PANT.webp',
      price: 190.00,
      description: 'Stylish pants with a unique design, perfect for casual outings.',
      color: 'Blue',
      sizes: ['XS', 'S', 'M'],
      images: [
        'https://stitched-lb.com/wp-content/uploads/2025/03/GEM-PANT.webp',
      ],
      categories: ['Clothing', 'Pants'],
      additionalInfo: {
        weight: '0.5 kg',
        color: 'Blue',
        size: 'XS, S, M',
      },
    },
    {
      name: 'Riri Maxi Dress',
      img: 'https://stitched-lb.com/wp-content/uploads/2025/03/GREEN-DRESS.webp',
      price: 315.00,
      description: 'A beautiful maxi dress in green, perfect for summer events.',
      color: 'Green',
      sizes: ['S', 'M', 'L'],
      images: [
        'https://stitched-lb.com/wp-content/uploads/2025/03/GREEN-DRESS.webp',
      ],
      categories: ['Clothing', 'Dresses'],
      additionalInfo: {
        weight: '0.7 kg',
        color: 'Green',
        size: 'S, M, L',
      },
    },
    {
      name: 'Denim Star Tie Dye Boyfriend Longsleeve Tee - Cream',
      img: 'https://stitched-lb.com/wp-content/uploads/2025/03/26795C_CREAM_15.webp',
      price: 195.00,
      description: 'A trendy long-sleeve tee with a tie-dye design, perfect for layering.',
      color: 'Cream',
      sizes: ['M', 'L'],
      images: [
        'https://stitched-lb.com/wp-content/uploads/2025/03/26795C_CREAM_15.webp',
      ],
      categories: ['Clothing', 'Tops'],
      additionalInfo: {
        weight: '0.4 kg',
        color: 'Cream',
        size: 'M, L',
      },
    },
    {
      name: 'Rouge Love Kobe Tee - Blue Tie Dye',
      img: 'https://stitched-lb.com/wp-content/uploads/2025/03/26771_BLUETIEDYE_16.webp',
      price: 150.00,
      description: 'A stylish tee with a blue tie-dye pattern, perfect for casual wear.',
      color: 'Blue',
      sizes: ['S', 'M'],
      images: [
        'https://stitched-lb.com/wp-content/uploads/2025/03/26771_BLUETIEDYE_16.webp',
      ],
      categories: ['Clothing', 'Tops'],
      additionalInfo: {
        weight: '0.3 kg',
        color: 'Blue',
        size: 'S, M',
      },
    },
    {
      name: 'Denim Star Tie Dye Oversized Tank Top',
      img: 'https://stitched-lb.com/wp-content/uploads/2025/03/star-1.webp',
      price: 175.00,
      description: 'An oversized tank top with a denim star design, perfect for summer.',
      color: 'Blue',
      sizes: ['M', 'L'],
      images: [
        'https://stitched-lb.com/wp-content/uploads/2025/03/star-1.webp',
      ],
      categories: ['Clothing', 'Tops'],
      additionalInfo: {
        weight: '0.3 kg',
        color: 'Blue',
        size: 'M, L',
      },
    },
    {
      name: 'HANNAH CARDIGAN',
      img: 'https://stitched-lb.com/wp-content/uploads/2024/10/0-1.jpg',
      price: 50.00,
      description: 'A cozy cardigan, perfect for layering in cooler weather.',
      color: 'Beige',
      sizes: ['S', 'M'],
      images: [
        'https://stitched-lb.com/wp-content/uploads/2024/10/0-1.jpg',
      ],
      categories: ['Clothing', 'Outerwear'],
      additionalInfo: {
        weight: '0.6 kg',
        color: 'Beige',
        size: 'S, M',
      },
    },
    {
        name: 'Rouge Love Kobe Tee - Blue Tie Dye',
        img: 'https://stitched-lb.com/wp-content/uploads/2025/03/26771_BLUETIEDYE_16.webp',
        price: 150.00,
        description: 'A stylish tee with a blue tie-dye pattern, perfect for casual wear.',
        color: 'Blue',
        sizes: ['S', 'M'],
        images: [
          'https://stitched-lb.com/wp-content/uploads/2025/03/26771_BLUETIEDYE_16.webp',
        ],
        categories: ['Clothing', 'Tops'],
        additionalInfo: {
          weight: '0.3 kg',
          color: 'Blue',
          size: 'S, M',
        },
      },
      {
        name: 'Denim Star Tie Dye Oversized Tank Top',
        img: 'https://stitched-lb.com/wp-content/uploads/2025/03/star-1.webp',
        price: 175.00,
        description: 'An oversized tank top with a denim star design, perfect for summer.',
        color: 'Blue',
        sizes: ['M', 'L'],
        images: [
          'https://stitched-lb.com/wp-content/uploads/2025/03/star-1.webp',
        ],
        categories: ['Clothing', 'Tops'],
        additionalInfo: {
          weight: '0.3 kg',
          color: 'Blue',
          size: 'M, L',
        },
      },

    // Add more related products as needed
  ];
  // Define the RelatedProducts component
const RelatedProductsComponent: React.FC = () => {
    const itemsPerPage = 4;
    const totalPages = Math.ceil(relatedProductsData.length / itemsPerPage);
    const [relatedPage, setRelatedPage] = useState(0);
  
    const currentRelatedProducts = relatedProductsData.slice(
      relatedPage * itemsPerPage,
      (relatedPage + 1) * itemsPerPage
    );
  
    return (
      <div className="related-products">
        <h2>Related products</h2>
        <div className="related-products-grid">
          {currentRelatedProducts.map((item, index) => (
            <div key={index} className="related-product-item">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <p className="price">
                {typeof item.price === "number"
                  ? item.price.toFixed(2)
                  : parseFloat(item.price).toFixed(2)}
                $
              </p>
            </div>
          ))}
        </div>
        <div className="pagination-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot ${relatedPage === index ? "active" : ""}`}
              onClick={() => setRelatedPage(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };

  export default RelatedProductsComponent;
