import React, { useState } from "react";

interface IForm {
    title: HTMLInputElement,
    description: HTMLInputElement,
    price: HTMLInputElement
}

const ProductForm = () => {
    const [title, setTitle] = useState('New Item')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('$999')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target)
        switch(e.target.name) {
            case('title'):
                setTitle(e.target.value)
                break;
            case('description'):
                setDescription(e.target.value)
                break
            case('price'):
                setPrice(e.target.value)
                break
            default:
                alert('NOT IN FORM')
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(`${title} - ${description} - ${price}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input name='title' type='text' value={title} onChange={handleChange} />    
                </label>
                <label>
                    Description:
                    <input name='description' type='text' value={description} onChange={handleChange} />    
                </label>
                <label>
                    Price:
                    <input name='price' type='text' value={price} onChange={handleChange} />    
                </label>  
                <input type='submit' />  
            </form>  
        </>
    )
}

export default ProductForm