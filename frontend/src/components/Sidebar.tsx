import React, { useState, useRef, useEffect } from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});
  const [price, setPrice] = useState<number>(150);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const categories = [
    { name: "Accessories", subcategories: ["Shoes and Beach Bags"] },
    {
      name: "Clothing",
      subcategories: [
        "Blazers", "Bodysuits", "Bottoms", "Coats & Jackets", "Denim", "Dresses",
        "Jumpsuits", "Knitwear", "Loungewear", "Pants", "Set", "Shorts", "Skirts", "Tops",
      ],
    },
    { name: "Swimwear", subcategories: ["Bikinis", "Cover up", "One piece", "Pareo"] },
  ];

  return (
    <aside className="sidebar">
      <h3>SHOP BY CATEGORIES</h3>
      <ul className="no-bullets"></ul>
      <ul>
        {categories.map((category) => {
          const ref = useRef<HTMLDivElement>(null);

          useEffect(() => {
            const element = ref.current;
            if (element) {
              element.style.maxHeight = openCategories[category.name]
                ? `${element.scrollHeight}px`
                : "0px";
            }
          }, [openCategories[category.name]]);

          return (
            <li key={category.name}>
              <div className="category-header" onClick={() => toggleCategory(category.name)}>
                <span className="category-title">{category.name}</span>
                {category.subcategories.length > 0 && (
                  <span className="ti-wrapper">
                    <i
                      className={`ti-${
                        openCategories[category.name] ? "angle-up" : "angle-down"
                      }`}
                    ></i>
                  </span>
                )}
              </div>

              <div
                ref={ref}
                className="subcategory-wrapper"
              >
                <ul className="subcategory-list no-bullets">
                  {category.subcategories.map((sub) => (
                    <li key={sub}>{sub}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>

      <hr className="section-divider" />

      <h3>SHOP BY PRICE</h3>
      <div className="price-range-container">
        <input
          type="range"
          min="70"
          max="250"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="price-slider"
        />
      </div>
      <div className="price-label">Price: <span>${price.toFixed(2)}</span></div>
      <button className="filter-btn">FILTER</button>

      <hr className="section-divider" />

      <h3>SHOP BY COLOR</h3>
      <div className="color-filter-container">
        <ul className="color-filter no-bullets">
          <li><span className="color-box blue"></span>Blue</li>
          <li><span className="color-box dark-blue"></span>Dark Blue</li>
          <li><span className="color-box fuschia"></span>Fuschia</li>
          <li><span className="color-box gold"></span>Gold</li>
          <li><span className="color-box green"></span>Green</li>
          <li><span className="color-box light-pink"></span>Light Pink</li>
          <li><span className="color-box red"></span>Red</li>
          <li><span className="color-box brown"></span>Brown</li>
          <li><span className="color-box yellow"></span>Yellow</li>
          <li><span className="color-box purple"></span>Purple</li>
        </ul>
      </div>

      <hr className="section-divider" />

      <h3>SHOP BY SIZE</h3>
      <ul className="size-filter no-bullets">
        {[
          { size: "ONE SIZE", count: 1 },
          { size: "37", count: 4 },
          { size: "38", count: 2 },
          { size: "39", count: 1 },
        ].map((item) => (
          <li key={item.size} className="size-item">
            <span className="size-label">{item.size}</span>
            <span className="size-count">{item.count}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;