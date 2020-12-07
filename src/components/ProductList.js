import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import Footer from "./Footer";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <Title name="our" title="products" />
              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(function(product) {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
