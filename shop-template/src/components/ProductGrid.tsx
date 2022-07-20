import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../models/Product";

interface ProductGridProps {
  ProductList: Product[];
}

export default class ProductGrid extends React.Component<ProductGridProps, {}> {
  render() {
    return (
      <div>
        <div className="w3-row w3-grayscale product-grid">
          {this.props.ProductList.map((product: Product) => (
            <div className="w3-col l3 s6" key={product.id}>
              <div className="w3-display-container grid-item">
                <Link to="/product">
                  <img
                    src={product.image}
                    alt="product"
                    className="w3-width-100"
                  />
                </Link>
                <div className="w3-display-middle w3-display-hover">
                  <button className="w3-button w3-black">
                    {/*
                                    @click="
                              addProductToCart(product);
                              $emit('setCartModalNewProduct', product);
                              $emit('showCartModal');"
                                */}
                    Add to Cart <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <p className="grid-item">
                <Link to="/product">{product.product_name}</Link>
                <br />
                <b>{product.price}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
