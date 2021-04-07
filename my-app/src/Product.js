import React from 'react';
import "./Product.css";
import { Button } from '@material-ui/core';

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p> &#9733;</p>
                    ))
                }
            </div> 
            </div>
            {/* Product contains id,title,price,rating,img  */}
            {/* Here we will create one component and pass out this props to render */}

            <img className="product__image"src={image} alt="" />
            <p>{id}</p>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
