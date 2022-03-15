import {} from './Login.css';
import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContenxt';


function Login() {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    function loginHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let data = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        authService.login(data)
            .then((res) => {
                if(res.errors) {
                    navigate('/login');
                } else {
                    login(res);
                    navigate('/');
                }
            });
    }

    return (
        <>
            <form className="auth-forms" acceptCharset="utf-8" onSubmit={loginHandler}>
                <label>
                    Email
                    <input type="text" name="email" placeholder="Your email" id="search-field" className="blink search-field" />
                </label>
                <label>
                    Password
                    <input type="password" name="password" placeholder="Your email" id="search-field" className="blink search-field" />
                </label>
                    <button>Login</button>
            </form>
        </>
    );
}

export default Login;