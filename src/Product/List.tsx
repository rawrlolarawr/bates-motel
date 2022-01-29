import React from "react";
import Product, { IProduct } from "./"

export interface IProducts {
    src: IProduct[]
}

const ProductList = ({ src }: IProducts) => {
    return (
        <>
            {src.map(prod => <Product title={prod.title} description={prod.description} price={prod.price} /> )}
        </>
    )
}

export default ProductList