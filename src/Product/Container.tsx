import React,{ useEffect } from "react";

import NewProduct from './Form'
import Products from './List'

import { connect } from 'react-redux'
import { RootState } from "../store";

import { data } from '../data/seed'
import { useAppSelector } from "../hooks/product";

const ProductContainer = (props) => {

    return (
        <>
            <NewProduct />
            <Products src={props.products} />
        </>
    )
}

const mapStateToProps = (state: RootState) => {
    return { products: state.products }
}

export default connect(mapStateToProps)(ProductContainer)