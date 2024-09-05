import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { queryClient } from '../main';

const initialFormData = {
    name: "",
    description: "",
    stock: 0,
    price: 0,
}

const PaginationProductForm = ({ id }) => {
    const [formData, setFormData] = useState(initialFormData);
    const history = useHistory();

    const inputChangeHandler = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const mutation = useMutation({
        mutationFn: (formData) =>
            axios
                .put("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + id, formData)
                .then((res) => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            history.push("/paginationProduct");
        }
    })

    const submitHandler = (e) => {
        e.preventDefault();
        mutation.mutate(formData)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name'>Name
                        <input className='border-2 border-black border-solid' type="text" name='name' value={formData.name} onChange={inputChangeHandler} />
                    </label>
                </div>
                <div>
                    <label htmlFor='description'>Description
                        <textarea className='border-2 border-black border-solid' name='description' value={formData.description} onChange={inputChangeHandler} />
                    </label>
                </div>
                <div>
                    <label htmlFor='stock'>Stock
                        <input className='border-2 border-black border-solid' type="number" name='stock' value={formData.stock} onChange={inputChangeHandler} />
                    </label>
                </div>
                <div>
                    <label htmlFor='price'>Price
                        <input className='border-2 border-black border-solid' type="number" name='price' value={formData.number} onChange={inputChangeHandler} />
                    </label>
                </div>
                <div>
                    <button className='border-2 border-black border-solid' type='submit'>Güncelle</button>
                </div>
            </form>
        </div>
    )
}

export default PaginationProductForm
