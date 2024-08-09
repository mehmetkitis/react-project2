import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'

const formDataInitial = {
    email: "",
    password: "",
    rememberMe: false,
}

const WorkintechLoginPage = () => {
    const [formData, setFormData] = useState(formDataInitial);
    const history = useHistory();

    const inputChangeHandler = (event) => {
        const { value, name, type, checked } = event.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        toast.success("Giriş Başarılı");
        history.push('/');
        setFormData(formDataInitial);
    }

    const resetHandler = (event) => {
        event.preventDefault();
        setFormData(formDataInitial);
    }

    useEffect(() => {
        console.warn("******* formData Changed ! *************")
        console.warn(formData);
    }, [formData])
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
