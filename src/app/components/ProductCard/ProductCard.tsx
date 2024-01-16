import React from "react";
import AddToCart from "../AddToCart/AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className="product-card__image"></div>
      <AddToCart></AddToCart>
    </div>
  );
};

export default ProductCard;
