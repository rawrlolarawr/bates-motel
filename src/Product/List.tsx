import React from "react";
import Product, { IProduct } from "./"

export interface IProducts {
    src?: IProduct[]
}

const ProductList = ({ src }: IProducts ) => {
    return (
        <>
            {src && src.map(prod => <Product key={prod.key} product={prod} /> )}
        </>
    )
}

export default ProductList