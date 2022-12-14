import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

const ProductDetails = ({ children }: Props) => {
  const id = useParams().id;

  return (
    <div className="ProductDetails">
      <h2>{id}</h2>
      ProductDetails
    </div>
  );
};

export default ProductDetails;
