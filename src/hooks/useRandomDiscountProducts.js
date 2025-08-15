import { useState, useEffect } from "react";

export const useRandomDiscountProducts = (products, count = 4) => {
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProducts = new Set();

      while (selectedProducts.size < count) {
        const idx = Math.floor(Math.random() * products.length);
        if (products[idx].discont_price) {
          selectedProducts.add(products[idx]);
        }
      }

      setRandomItems(Array.from(selectedProducts));
    }
  }, [products, count]);

  return randomItems;
};
