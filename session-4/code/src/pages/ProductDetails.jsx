import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${params.pid}`,
      );
      const result = await response.json();
      console.log(result);
      setProduct(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>{product?.brand}</div>;
};

export default ProductDetails;
