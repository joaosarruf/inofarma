// ProductPage.jsx
import React from 'react';

const ProductPage = ({ product }) => {
    return (
        <div className="product-page">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Preço: R$ {product.price}</p>
            <button>Adicionar ao carrinho</button>
        </div>
    );
};

export default ProductPage;
