import { createAction, createReducer, nanoid } from '@reduxjs/toolkit'
import { IProduct } from'../Product'

interface ProductsState {
    products: IProduct[]
}

export const addProduct = createAction('product/add', function prepare(product: IProduct) {
    return {
        payload: {
            key: nanoid(),
            title: product.title,
            description: product.description,
            price: product.price,
            createdAt: new Date().toISOString(),
        },
    }
})

const initialState = { products: [] } as ProductsState

export const productReducer = createReducer(initialState, builder => {
    builder
        .addCase(addProduct, (state, action) => {
            state.products = [...state.products, action.payload]
        })
})