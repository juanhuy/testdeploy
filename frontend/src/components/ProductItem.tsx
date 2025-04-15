
// // src/components/ProductItem.tsx
// import React, { useState, useMemo } from "react";
// import { Link, useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import "../styles/ProductItem.css";
// import "../styles/global.css";
// import RelatedProducts from "./RelatedProduct";
// import {fetchProductByName}  from "../../api/products";
// const ProductItem: React.FC = () => {
//   const { productName } = useParams<{ productName: string }>();
//   const [quantity, setQuantity] = useState(1);
//   const [currentImage, setCurrentImage] = useState(0);
//   const [activeTab, setActiveTab] = useState("description");

//   const {
//     data: product,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["product", productName],
//     queryFn: () => fetchProductByName(productName!),
//     enabled: !!productName,
//   });

//   if (isLoading) {
//     return <div>Loading product...</div>;
//   }

//   if (error || !product) {
//     return (
//       <div className="product-not-found">
//         <h2>Product not found</h2>
//         <p>We couldn't find the product you're looking for.</p>
//         <Link to="/" className="back-to-home">
//           Go back to Home
//         </Link>
//       </div>
//     );
//   }

//   const renderTabContent = useMemo(() => {
//     if (!product) return null;
//     switch (activeTab) {
//       case "description":
//         return (
//           <div className="tab-content">
//             <p>{product.Description || "No description available."}</p>
//             <p>BAOBAB-LEBON</p>
//           </div>
//         );
//       case "additional":
//         return (
//           <div className="tab-content additional-info">
//             <table>
//               <tbody>
//                 <tr>
//                   <td>Weight</td>
//                   <td>{product.AdditionalInfo?.weight || "N/A"}</td>
//                 </tr>
//                 <tr>
//                   <td>Color</td>
//                   <td>{product.AdditionalInfo?.color || "N/A"}</td>
//                 </tr>
//                 <tr>
//                   <td>Size</td>
//                   <td>{product.AdditionalInfo?.size || "N/A"}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         );
//       case "reviews":
//         return (
//           <div className="tab-content reviews">
//             <p>
//               Only logged in customers who have purchased this product may leave a
//               review.
//             </p>
//             <h3>REVIEWS</h3>
//             <p>There are no reviews yet.</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   }, [activeTab, product]);

//   const breadcrumbPaths = useMemo(
//     () => [
//       { label: "Home", path: "/" },
//       { label: "Shop", path: "/shop" },
//       {
//         label: product?.Categories?.[0] || "Clothing",
//         path: `/shop/${(product?.Categories?.[0] || "clothing").toLowerCase()}`,
//       },
//       {
//         label: product?.Name || "Product",
//         path: `/product/${productName}`,
//       },
//     ],
//     [product, productName]
//   );

//   if (isLoading) {
//     return <div>Loading product...</div>;
//   }

//   if (error || !product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="product-page">
//       <div className="product-main">
//         <div className="product-images">
//           <div className="thumbnail-gallery">
//             {product.Images?.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Thumbnail ${index + 1}`}
//                 className={`thumbnail ${currentImage === index ? "active" : ""}`}
//                 onClick={() => setCurrentImage(index)}
//                 loading="lazy"
//               />
//             ))}
//           </div>
//           <div className="main-image">
//             <img
//               src={product.Images?.[currentImage] || product.Img}
//               alt={product.Name}
//               loading="lazy"
//             />
//           </div>
//         </div>

//         <div className="product-details">
//           <div className="breadcrumb">
//             {breadcrumbPaths.map((item, index) => (
//               <span key={item.path}>
//                 {index < breadcrumbPaths.length - 1 ? (
//                   <>
//                     <Link to={item.path} className="breadcrumb-link">
//                       {item.label}
//                     </Link>
//                     <span> / </span>
//                   </>
//                 ) : (
//                   <span>{item.label}</span>
//                 )}
//               </span>
//             ))}
//           </div>
//           <h1>{product.Name}</h1>
//           <p className="price">{product.Price.toFixed(2)}$</p>
//           <p className="description">{product.Description}</p>

//           <div className="color-selection">
//             <span>Color: </span>
//             <div
//               className="color-circle"
//               style={{ backgroundColor: "#2E8B57" }}
//             ></div>
//           </div>

//           <div className="size-selection">
//             <span>Size: </span>
//             {product.Sizes?.map((size) => (
//               <button key={size} className="size-button">
//                 {size}
//               </button>
//             ))}
//           </div>

//           <div className="quantity-selection">
//             <button
//               onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
//             >
//               -
//             </button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity(quantity + 1)}>+</button>
//           </div>

//           <div className="action-buttons">
//             <button className="add-to-cart">ADD TO CART</button>
//             <button className="buy-now">BUY NOW</button>
//           </div>

//           <div className="product-meta">
//             <p>SKU: N/A</p>
//             <p>Categories: {product.Categories?.join(", ") || "N/A"}</p>
//             <div className="share">
//               <span>Share: </span>
//               <i className="fab fa-facebook-f"></i>
//               <i className="fab fa-twitter"></i>
//               <i className="fab fa-linkedin-in"></i>
//               <i className="fab fa-whatsapp"></i>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="tabs">
//         <button
//           className={`tab ${activeTab === "description" ? "active" : ""}`}
//           onClick={() => setActiveTab("description")}
//         >
//           DESCRIPTION
//         </button>
//         <button
//           className={`tab ${activeTab === "additional" ? "active" : ""}`}
//           onClick={() => setActiveTab("additional")}
//         >
//           ADDITIONAL INFORMATION
//         </button>
//         <button
//           className={`tab ${activeTab === "reviews" ? "active" : ""}`}
//           onClick={() => setActiveTab("reviews")}
//         >
//           REVIEWS (0)
//         </button>
//       </div>

//       {renderTabContent}

//       <RelatedProducts excludeName={product.Name} category={product.Categories?.[0]} />
//     </div>
//   );
// };

// export default ProductItem;

import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "../styles/ProductItem.css";
import "../styles/global.css";
import RelatedProducts from "./RelatedProduct";
import { fetchProductById } from "../../api/products";

const ProductItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(parseInt(id!)),
    enabled: !!id,
  });

  if (isLoading) {
    return <div>Loading product...</div>;
  }

  if (error || !product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>We couldn't find the product you're looking for.</p>
        <Link to="/" className="back-to-home">
          Go back to Home
        </Link>
      </div>
    );
  }

  const renderTabContent = useMemo(() => {
    switch (activeTab) {
      case "description":
        return (
          <div className="tab-content">
            <p>{product.Description || "No description available."}</p>
            <p>BAOBAB-LEBON</p>
          </div>
        );
      case "additional":
        return (
          <div className="tab-content additional-info">
            <table>
              <tbody>
                <tr>
                  <td>Weight</td>
                  <td>{product.AdditionalInfo?.weight || "N/A"}</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>{product.AdditionalInfo?.color || "N/A"}</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>{product.AdditionalInfo?.size || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "reviews":
        return (
          <div className="tab-content reviews">
            <p>
              Only logged in customers who have purchased this product may leave a review.
            </p>
            <h3>REVIEWS</h3>
            <p>There are no reviews yet.</p>
          </div>
        );
      default:
        return null;
    }
  }, [activeTab, product]);

  const breadcrumbPaths = useMemo(
    () => [
      { label: "Home", path: "/" },
      { label: "Shop", path: "/shop" },
      {
        label: product?.Categories?.[0] || "Clothing",
        path: `/shop/${(product?.Categories?.[0] || "clothing").toLowerCase()}`,
      },
      {
        label: product?.Name || "Product",
        path: `/product/${id}`,
      },
    ],
    [product, id]
  );

  return (
    <div className="product-page">
      <div className="product-main">
        <div className="product-images">
          <div className="thumbnail-gallery">
            {product.Images?.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${currentImage === index ? "active" : ""}`}
                onClick={() => setCurrentImage(index)}
                loading="lazy"
              />
            ))}
          </div>
          <div className="main-image">
            <img
              src={product.Images?.[currentImage] || product.Img}
              alt={product.Name}
              loading="lazy"
            />
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
          <h1>{product.Name}</h1>
          <p className="price">{product.Price.toFixed(2)}$</p>
          <p className="description">{product.Description}</p>

          <div className="color-selection">
            <span>Color: </span>
            <div
              className="color-circle"
              style={{ backgroundColor: product.AdditionalInfo?.color || "#2E8B57" }}
            ></div>
          </div>

          <div className="size-selection">
            <span>Size: </span>
            {product.Sizes?.length ? (
              product.Sizes.map((size: string) => (
                <button key={size} className="size-button">
                  {size}
                </button>
              ))
            ) : (
              <span>N/A</span>
            )}
          </div>

          <div className="quantity-selection">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart">ADD TO CART</button>
            <button className="buy-now">BUY NOW</button>
          </div>

          <div className="product-meta">
            <p>SKU: N/A</p>
            <p>Categories: {product.Categories?.join(", ") || "N/A"}</p>
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
          className={`tab ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          DESCRIPTION
        </button>
        <button
          className={`tab ${activeTab === "additional" ? "active" : ""}`}
          onClick={() => setActiveTab("additional")}
        >
          ADDITIONAL INFORMATION
        </button>
        <button
          className={`tab ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          REVIEWS (0)
        </button>
      </div>

      {renderTabContent}

      <RelatedProducts excludeName={product.Name} category={product.Categories?.[0]} />
    </div>
  );
};

export default ProductItem;