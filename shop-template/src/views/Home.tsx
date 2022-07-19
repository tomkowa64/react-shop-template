import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Newsletter from "../components/Newsletter";
import "../styles/Home.sass";

interface HomeState {
  IsNewsletterVisible: boolean;
}

export default class Home extends React.Component<{}, HomeState> {
  state = {
    IsNewsletterVisible: false,
  };

  toggleNewsletterVisible() {
    this.setState((prevState) => ({
      IsNewsletterVisible: !prevState.IsNewsletterVisible,
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="w3-content w3-max-width-1200">
          <Nav
            handleNewsletterVisibilityChange={this.toggleNewsletterVisible.bind(
              this
            )}
          />
          <div className="w3-main w3-margin-left-250">
            <div className="w3-hide-large w3-margin-top-83"></div>
            <header className="w3-container w3-xlarge">
              <p className="w3-left">Jeans</p>
              <p className="w3-right">
                <Link to="/cart">
                  <span className="cart-quantity-number">4</span>
                  <i className="fa fa-shopping-cart w3-margin-right"></i>
                </Link>
              </p>
            </header>
            <div className="w3-display-container w3-container">
              <img
                src="https://www.w3schools.com/w3images/jeans.jpg"
                alt="Jeans"
                className="w3-width-100"
              />
              <div className="w3-display-topleft w3-text-white w3-padding-24-48">
                <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
                <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>
                <h1 className="w3-hide-small">COLLECTION 2016</h1>
                <p>
                  <a
                    href="#jeans"
                    className="w3-button w3-black w3-padding-large w3-large"
                  >
                    SHOP NOW
                  </a>
                </p>
              </div>
            </div>
            <div className="w3-container w3-text-grey" id="jeans">
              <p>30 items</p>
            </div>
            {/*
          <!-- Product grid -->
          <ProductGrid
            :productsList="productsList"
            @showCartModal="showCartModal"
            @setCartModalNewProduct="getCartModalNewProduct"
          ></ProductGrid>
        */}
            <Footer />
            <Subscribe />
          </div>
          {this.state.IsNewsletterVisible ? (
            <Newsletter
              IsNewsletterVisible={this.state.IsNewsletterVisible}
              handleNewsletterVisibilityChange={this.toggleNewsletterVisible.bind(
                this
              )}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
