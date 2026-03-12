import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProdcuts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      console.log(result);
      setProdcuts(result.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productList = products.length ? (
    products.map((product) => {
      return (
        <>
          <p key={product.id}>{product.brand}</p>
          <p>
            <Link to={`/products/${product.id}`}>Title: {product.title}</Link>
          </p>
          <img src={product.images[0]} style={{ width: "150px" }} />
        </>
      );
    })
  ) : (
    <p>No post yet</p>
  );

  return <>{productList}</>;
};

export default Products;
