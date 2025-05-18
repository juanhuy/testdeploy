import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetail.css";
import { useCart } from "../contexts/CartContext"; // ✅ Thêm

type ProductItem = {
  id: number;
  price: number;
  quantity: number;
  size: string | null;
  image: { image_url: string };
  color: { name: string; color_code: string };
  product: {
    id: number;
    name: string;
    description: string;
    all_rate: number;
    category_id: number;
  };
};

type Product = {
  id: number;
  name: string;
  description: string;
  all_rate: number;
  category: { id: number; name: string };
  productItems: ProductItem[];
};

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ Dùng context

  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/api/product-items/${id}`)
      .then((res) => (res.ok ? res.json() : Promise.reject("Không tìm thấy")))
      .then((item: ProductItem) => {
        fetch(`http://localhost:3001/api/categories/${item.product.category_id}`)
          .then((res) => res.json())
          .then((category) => {
            const fullProduct: Product = {
              id: item.product.id,
              name: item.product.name,
              description: item.product.description,
              all_rate: item.product.all_rate,
              category: {
                id: item.product.category_id,
                name: category.name || "Không rõ",
              },
              productItems: [item],
            };
            setProduct(fullProduct);
            setSelectedImage(item.image.image_url || "");
          });
      })
      .catch(() => setProduct(null));
  }, [id]);

  if (!product || !product.productItems || product.productItems.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        ❌ Không tìm thấy sản phẩm hoặc chưa có biến thể.
      </div>
    );
  }

  const item = product.productItems[0];

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: product.name,
      price: item.price,
      image: item.image.image_url,
    });
    alert("✔ Sản phẩm đã được thêm vào giỏ hàng");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  return (
    <div className="product-container">
      <div className="product-grid">
        <div>
          <div className="product-image-main">
            <img src={selectedImage} alt={product.name} />
          </div>
          <div className="product-thumbnails">
            <img
              src={item.image.image_url}
              onClick={() => setSelectedImage(item.image.image_url)}
              className={`product-thumbnail ${
                selectedImage === item.image.image_url ? "thumbnail-active" : ""
              }`}
              alt="Thumbnail"
            />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">{item.price.toLocaleString()} ₫</p>
          <p className="product-description">{product.description}</p>

          {item.color && (
            <div className="flex items-center gap-2">
              <span>Màu:</span>
              <div
                className="color-circle"
                style={{ backgroundColor: item.color.color_code }}
                title={item.color.name}
              />
            </div>
          )}

          <div className="flex items-center gap-2">
            <span>Size:</span>
            <div className="size-buttons">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button key={s}>{s}</button>
              ))}
            </div>
          </div>

          <div className="quantity-control">
            <span>Số lượng:</span>
            <div className="quantity-box">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart" onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </button>
            <button className="buy-now" onClick={handleBuyNow}>
              Mua ngay
            </button>
          </div>

          <div className="meta-info">
            <p><strong>Danh mục:</strong> {product.category.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
