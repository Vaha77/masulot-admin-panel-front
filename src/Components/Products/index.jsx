import React from "react";
import { useParams } from "react-router-dom";
import { Carddata } from "../../Mock/products";
import { Product } from "./style";

const Products = () => {
  const { id } = useParams();

  return (
    <Product>
      {Carddata.filter((data) => data.id === +id).map((data) => (
        <div key={data.id}>
          <img src={data.img} alt="" />
          <h1>{data.title}</h1>
        </div>
      ))}
    </Product>
  );
};

export default Products;
