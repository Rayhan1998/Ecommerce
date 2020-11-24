import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductConext = React.createContext();
// Provider
// Consumer
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState(() => {
      return {
        products: tempProducts
      };
    });
  };

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = id => {
    console.log(`id is ${id}`);
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
