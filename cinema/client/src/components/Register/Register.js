import { } from '../Login/Login.css';
import * as authService from '../../services/authService';

import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    function registerHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.target);
        let data = {
            email: formData.get('email'),
            username: formData.get('username'),
            password: formData.get('password'),
            rePassword: formData.get('rePassword'),
        }

        authService.register(data)
            .then(() => {
                navigate('/');
            });
    }

    return (
        <form className="auth-forms" acceptCharset="utf-8" onSubmit={registerHandler}>
            <label>
                Username
                <input type="text" name="username" placeholder="Your username" id="search-field" className="blink search-field" />
            </label>
            <label>
                Email
                <input type="text" name="email" placeholder="Your email" id="search-field" className="blink search-field" />
            </label>
            <label>
                Password
                <input type="password" name="password" placeholder="Password" id="search-field" className="blink search-field" />
            </label>
            <label>
                Password
                <input type="password" name="rePassword" placeholder="Repet Password" id="search-field" className="blink search-field" />
            </label>
            <button type='submit'>Register</button>
        </form>
    );
}

export default Register;