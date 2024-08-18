import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'
import { users } from './user'

const formDataInitial = {
    email: "",
    password: "",
    rememberMe: false,
}

let usersEmail = [];
let usersPassword = [];

users.map((i) => {
    usersEmail = [...usersEmail, { email: i.email }]
})

users.map((i) => {
    usersPassword = [...usersPassword, { password: i.password }]
})

// for (let i of users) {
//     usersEmail = [...usersEmail, { email: i.email }]
// }

// for (let i of users) {
//     usersPassword = [...usersPassword, { password: i.password }]
// }

console.log(usersEmail);
console.log(usersPassword);

const WorkintechLoginPage = () => {
    const [formData, setFormData] = useState(formDataInitial);
    const history = useHistory();


    const inputChangeHandler = (event) => {
        const { value, name, type, checked } = event.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }



    const submitHandler = (event) => {
        event.preventDefault();
        if (usersEmail.find((e) => {
            return (e.email === formData.email)
        }
        )) {
            if (usersPassword.find((p) => p.password === formData.password)) {
                toast.success("Giriş Başarılı");
                history.push('/');
            } else {
                toast.error("Şifre Yanlış");
            }
        } else {
            toast.error("Kullanıcı bulunamadı.");
        }
        setFormData(formDataInitial);
    }

    const resetHandler = (event) => {
        event.preventDefault();
        setFormData(formDataInitial);
    }


    return (
        <div>
            <h1>Login Page</h1>
            <hr />
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Email
                            <input
                                type="email"
                                name='email'
                                value={formData.email}
                                onChange={inputChangeHandler}
                                data-cy="login-email-input" />
                        </label>
                    </div>
                    <div>
                        <label>Password
                            <input
                                type="password"
                                name='password'
                                value={formData.password}
                                onChange={inputChangeHandler}
                                data-cy="login-password-input" />
                        </label>
                    </div>
                    <div>
                        <label>Remember Me
                            <input
                                type="checkbox"
                                name='rememberMe'
                                checked={formData.rememberMe}
                                onChange={inputChangeHandler}
                                data-cy="login-remember-input" />
                        </label>
                    </div>
                    <div>
                        <button type='submit' data-cy="login-submit-btn">Login</button>
                        <button onClick={resetHandler}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WorkintechLoginPage
