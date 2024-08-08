import React, { useState } from 'react'
import "./workintechRegisterPage.css"
import axios from 'axios';

const formDataObj = {
    adSoyad: '',
    email: '',
    departman: '',
    unvan: '',
    gorevler: '',
};

const WorkintechRegisterPageFormContainer = ({ addUser }) => {

    const [formData, setFormData] = useState(formDataObj);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('https://reqres.in/api/users', formData)
            .then((res) => {
                console.log(res);
                addUser(res.data);
                setFormData(formDataObj);
            })
            .catch((err) => console.log(err));
            
    };
    return (
        <form className="registerForm" onSubmit={handleSubmit}>
            <label htmlFor="adSoyad">Ad Soyad:</label>
            <input
                name="adSoyad"
                placeholder="Çalışanın tam adı ve soyadı"
                type="text"
                onChange={handleChange}
                value={formData.adSoyad}
            />
            <label htmlFor="email">Email</label>
            <input
                name="email"
                placeholder="Kurumsal email adresi "
                type="email"
                onChange={handleChange}
                value={formData.email}
            />
            <label htmlFor="departman">Departman</label>
            <input
                name="departman"
                placeholder="Çalıştığı departman "
                type="text"
                onChange={handleChange}
                value={formData.departman}
            />
            <label htmlFor="unvan">Ünvan</label>
            <input
                name="unvan"
                placeholder="Çalışanın ünvanı "
                type="text"
                onChange={handleChange}
                value={formData.unvan}
            />
            <label htmlFor="gorevler">Takım İçi Görevleri:</label>
            <input
                name="gorevler"
                placeholder="Çalışanın takım içindeki görev listesi "
                type="textarea"
                onChange={handleChange}
                value={formData.gorevler}
            />
            <button  >Sign In</button>
        </form>
    )
}

export default WorkintechRegisterPageFormContainer
