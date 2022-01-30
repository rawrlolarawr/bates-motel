import React from "react";

// Interface
export interface IProduct {
    key: string,
    title: string,
    description: string,
    price: string
}

interface IProdObj {
    product: IProduct
}

const Product = ({ product }: IProdObj) => {

    return (
        <>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><em>{product.price}</em></p>
        </>
    )
}

export default Product