import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function W6LoginForm() {
    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const history = useHistory();
    const { initAuth } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        initAuth(form);
        history.push("/friendsList")
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <div>
            <div className="loginFormMainDiv">
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2>USERNAME</h2>
                        <input
                            name="username"
                            onChange={handleChange}
                            value={form.username}
                            placeholder="Username"
                        ></input>
                    </div>
                    <div>
                        <h2>PASSWORD</h2>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={form.password}
                            placeholder="Password"
                        ></input>
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default W6LoginForm;
