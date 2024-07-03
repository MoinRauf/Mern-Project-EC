import React, { useState } from "react";
import { topProducts } from "../assets/data/data";
import { ProductItems } from "../home/product/ProductItems";
import { Heading } from "../common/Heading";

const Shop = () => {
  const [cartItems, setCartItems] = useState(topProducts);
  const allCategories = [
    "all",
    ...new Set(cartItems.map((item) => item.category)),
  ];
  const [category, setCategory] = useState(allCategories);

  const handleFilter = (category) => {
    const newItem = topProducts.filter((item) => item.category === category);
    setCartItems(newItem);

    if (category === "all") {
      setCartItems(topProducts);
      return;
    }
  };
  return (
    <>
      <section className="topproduct">
        <div className="container">
          <div className="head">
            <Heading
              title="GOSTO SHOP"
              desc="Meet our newbies! The latest templates uploaded to the marketplace."
            />
            <div className="category">
              {category.map((category) => (
                <button
                  className="button"
                  onClick={() => handleFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <ProductItems cartItems={cartItems} />
        </div>
      </section>
    </>
  );
};

export default Shop;
