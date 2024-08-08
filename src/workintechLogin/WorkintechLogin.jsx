import React, { useEffect, useState } from 'react'
import WorkintechSuccess from './WorkintechSuccess';

const WorkintechLogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        terms: false,
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        terms: "",
    })

    const [isFormValid, setIsFormValid] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const inputChangeHandler = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
    }

    const loginFormSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            setSubmitted(true)
        }
    }
    const { email, password, terms } = errors

    const runValidations = () => {

        //email check
        const emailValid = String(formData.email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        if (!emailValid) {
            setErrors((e) => ({ ...e, email: "Lütfen geçerli bir email adresi giriniz." }))
        } else {
            setErrors({ ...errors, email: "" })
        }

        const passwordValid = String(formData.password)
            .toLowerCase()
            .match(
                /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~*]{8,}$/
            );
        if (!passwordValid) {
            setErrors((e) => ({ ...e, password: "Lütfen geçerli bir şifre giriniz." }))
        } else {
            setErrors({ ...errors, password: "" })
        }

        const termsValid = formData.terms
        if (!termsValid) {
            setErrors((e) => ({ ...e, terms: "Lütfen terms alanını seçiniz." }))
        } else {
            setErrors({ ...errors, terms: "" })
        }

        return emailValid && passwordValid && termsValid
    }

    console.log(errors)

    useEffect(() => {
        setIsFormValid(runValidations())
    }, [formData])
    return submitted ? <WorkintechSuccess /> : (
        <div>
            <form onSubmit={loginFormSubmit}>
                <div>
                    <label>
                        Email
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={inputChangeHandler}
                            data-cy="login-email-input" />
                    </label>
                </div>
                {errors.email && <p>{errors.email}</p>}
                <div>
                    <label>
                        Password
                        <input
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={inputChangeHandler}
                            data-cy="login-password-input" />
                    </label>
                </div>
                {errors.password && <p>{errors.password}</p>}
                <div>
                    <label>
                        Terms
                        <input
                            type="checkbox"
                            name='terms'
                            checked={formData.terms}
                            onChange={inputChangeHandler}
                            data-cy="login-terms-input" />
                    </label>
                </div>
                {errors.terms && <p>{errors.terms}</p>}
                <div>
                    <button type='submit' disabled={!isFormValid} data-cy="login-submit-btn" >Login</button>
                </div>
            </form>

        </div>
    )
}

export default WorkintechLogin
