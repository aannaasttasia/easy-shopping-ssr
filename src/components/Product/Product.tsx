"use client";
import { Component } from "react";
import "./css/Product.scss";

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

class Product extends Component<
  { product: ProductType },
  { isHovered: boolean }
> {
  constructor(props: { product: ProductType }) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { product } = this.props;

    return (
      <article
        key={product.id}
        className="product"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <h1 className="product-name">{product.title}</h1>
        <figure>
          <div className="img-wrapper">
            <img src={product.thumbnail} alt="picture-of-product" />
          </div>
          <figcaption>
            <p className="product-price">${product.price}</p>
          </figcaption>
        </figure>
        <div className="product-btn">
          {this.state.isHovered && <button className="buy-button">Buy</button>}
        </div>
      </article>
    );
  }
}

export default Product;
