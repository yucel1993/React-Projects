import React from "react";
import { PRODUCTS } from "../../item";
import Item from "./Item";
import "./Product.scss";

function Product() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Burhan Tech Shops</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((item, i) => {
          return (
            
              <Item key={i} data={item} />
            
          );
        })}
      </div>
      
    </div>
  );
}

export default Product;
