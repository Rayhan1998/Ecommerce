import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductConext = React.createContext();
// Provider
// Consumer
class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = () => {
    console.log("hello from addToCart");
  };

  render() {
    return (
      <ProductConext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductConext.Provider>
    );
  }
}

const ProductConsumer = ProductConext.Consumer;

export { ProductProvider, ProductConsumer };
