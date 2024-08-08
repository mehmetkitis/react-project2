import axios from 'axios';
import React, { useEffect, useState } from 'react'

const contactFormDataInitial = {
    title: "",
    type: "",
    message: "",
    color: "",
    subscribeList: [],
}

const contactFormErrorsInitial = {
    title: "",
    type: "",
    message: "",
    color: "",
    subscribeList: "",
}

const contactFormErrorsMessages = {
    title: "Baslık alanı en az 5 karakter olmalıdır ve boşluk içermemelidir",
    type: "Konu alanı zorunludur.",
    message: "Mesaj alanı en az 20 karakter uzunluğunda olmalıdır.",
    color: "Renk alanı zorunludur.",
    subscribeList: "En az 1 en fazla 3 abonelik seçebilirsiniz.",
}

const WorkintechContactPage = () => {

    const [formData, setFormData] = useState(contactFormDataInitial);
    const [errors, setErrors] = useState(contactFormErrorsInitial);
    const [isValid, setIsValid] = useState(false)

    const inputChangeHandler = (event) => {
        const { value, name, type, checked } = event.target;
        setFormData((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }))
        if (name === "title" && (value.length < 5 || value.length === 0 || value.includes(" "))) {  
            setErrors({ ...errors, [name]: contactFormErrorsMessages[name] })
        } else {
            setErrors({ ...errors, [name]: "" })
        }
    }

    const listChangeHandler = (event) => {
        const { value, name, checked } = event.target;
        if (checked) {
            setFormData({ ...formData, [name]: [...formData[name], value] })
        } else {
            setFormData({ ...formData, [name]: [...formData[name].filter(f => f !== value)] })
        }
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        if (!isValid) {
            return
            axios
                .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
                .then((res) => {
                    const users = res.data;
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        if (
                            user.email == formData.email &&
                            user.password == formData.password
                        ) {

                            return;
                        }
                    }

                });
        }

    }

    const resetHandler = (event) => {
        event.preventDefault();
        setFormData(formDataInitial);
    }

    useEffect(() => {
        console.warn("******* formData Changed ! *************")
        console.warn(formData);
        console.warn(errors);
        if (errors.title === contactFormErrorsInitial.title) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [formData, errors])

    const color = ["blue", "green", "red"]
    const subscribeListValues = ["teknoloji", "sanat", "bilim", "siyaset", "müzik"]

    return (
        <div>
            <h1>Contact Us</h1>
            <hr />
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor='contact-title'>Başlık
                            <input  id='contact-title' type="text" name='title' value={formData.title} onChange={inputChangeHandler} />
                        </label>
                    </div>
                    <p>{errors.title}</p>
                    <div>
                        <label >Seçiniz
                            <div></div>
                            <select
                                name='type'
                                onChange={inputChangeHandler}
                                value={formData.type}>
                                <option disabled selected value={""}>Lütfen ileti tipini seçiniz</option>
                                <option>Şikayet</option>
                                <option>Öneri</option>
                                <option>Andaç</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor='contact-message'>Mesaj
                            <textarea id="contact-message" name='message' value={formData.message} onChange={inputChangeHandler} />
                        </label>
                    </div>
                    <div>
                        <label >Renk
                            <div />
                            <div>
                                {color.map((c, index) => {
                                    return (
                                        <label key={index} htmlFor={'contact-' + c} >{c}
                                            <input id={'contact-' + c}
                                                type="radio"
                                                name='color'
                                                value={c}
                                                checked={formData.color === c ? true : false}
                                                onChange={inputChangeHandler} />
                                        </label>)
                                })}
                            </div>
                        </label>
                    </div>
                    <div>
                        <label >Subscribe
                            <div />
                            <div>
                                {subscribeListValues.map((sub, index) => {
                                    return (
                                        <label key={index} htmlFor={'contact-' + sub} >{sub}
                                            <input
                                                id={'contact-' + sub}
                                                type="checkbox"
                                                name='subscribeList'
                                                value={sub}
                                                checked={formData.subscribeList.find(f => f === sub) ? true : false}
                                                onChange={listChangeHandler} />
                                        </label>)
                                })}
                            </div>
                        </label>
                    </div>
                    <div>
                        <button type='submit' disabled={!isValid}>login</button>
                        <button type='button'>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WorkintechContactPage
