import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "../models/Product";
import { productApiService } from "../services/ProductService";

interface ProductPageState {
  product: Product;
}

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class ProductPage extends React.Component<{}, ProductPageState> {
  render() {
    return <div></div>;
  }
}

export default withParams(ProductPage);
