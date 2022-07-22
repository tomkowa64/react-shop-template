import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";
import { productApiService } from "../services/ProductService";
import actions, {
  getCartSize,
  getCart,
  addToCart,
  addCustomQuantity,
} from "../features/cart/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import "../styles/index.sass";
import "../styles/Product.sass";
import { AnyAction } from "@reduxjs/toolkit";

export const ProductPage: React.FC = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState<{ [key: string]: any }>({});
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setProduct(await productApiService.getProduct(parseInt(id)));
    };
    fetchData();
  }, []);

  function handleQuantitydecrase() {
    if (purchaseQuantity > 1) {
      setPurchaseQuantity(purchaseQuantity - 1);
    }
  }

  function addProductToCart(): any {
    let newProduct: CartItem = {
      id: product.id,
      product_name: product.product_name,
      short_description: product.short_description,
      price: product.price,
      image: product.image,
      company: product.company,
      count: purchaseQuantity,
    };

    if (purchaseQuantity === 1) {
      dispatch(addToCart(newProduct));
    } else {
      dispatch(addCustomQuantity(newProduct));
    }
  }

  return (
    <div className="product-page w3-main">
      <div className="w3-row w3-padding-32">
        <div className="w3-container">
          <Link to="/"> Home / </Link>
          <span>Product</span>
        </div>
      </div>
      <div className="w3-row w3-padding-64">
        <div className="w3-third w3-container l3 s12">
          <p className="w3-center">
            <img src={product.image} alt="product" />
          </p>
        </div>
        <div className="w3-twothird w3-container l9 s12">
          <h1 className="w3-text-black">{product.product_name}</h1>
          <h5 className="w3-text-black">
            <b>{product.company}</b>
          </h5>
          <h3 className="w3-text-gray">{product.price}</h3>
          <p>{product.short_description}</p>
          <div className="product-quantity-input">
            <div className="minus" onClick={() => handleQuantitydecrase()}>
              -
            </div>
            <div className="quantity">
              <input type="number" value={purchaseQuantity} min={1} />
            </div>
            <div
              className="plus"
              onClick={() => setPurchaseQuantity(purchaseQuantity + 1)}
            >
              +
            </div>
          </div>
          <p>
            <button
              className="w3-button w3-black"
              onClick={() => addProductToCart()}
            >
              Cart<i className="fa fa-shopping-cart"></i>
            </button>
          </p>
        </div>
      </div>
      {/*
    <CommonProducts
      v-if="loaded && commonProducts.length > 0"
      :commonProducts="commonProducts"
    />
    <CompanyProducts
      v-if="loaded && companyProducts.length > 0"
      :companyProducts="companyProducts"
    />
      */}
    </div>
  );
};
