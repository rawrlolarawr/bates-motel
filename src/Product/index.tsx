import React from "react";

// Interface
export interface IProduct {
    title: string,
    description: string,
    price: string
}

const Product = ({ title, description, price }: IProduct) => {

    return (
        <>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><em>{price}</em></p>
        </>
    )
}

export default Product