import React from "react";

function Products(props) {
  return (
    <div className="fp-product">
      <a href={props.href}>
        <dt>
          <img className="fpimg" src={props.url}></img>
          <span className="name">
            <h2>{props.name}</h2>
          </span>
          <span>
            <p className="price">price: {props.price}</p>
          </span>
        </dt>
      </a>
    </div>
  );
}

export default Products;
