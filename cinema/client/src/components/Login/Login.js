import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import { useAuthContext } from '../../hooks/useAuthContenxt';
import { } from './Login.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userLoginSchema } from '../../validatons/UserValidation';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(userLoginSchema),
    });

    function loginHandler(_, e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let data = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        authService.login(data)
            .then((res) => {
                if (res.errors) {
                    navigate('/login');
                } else {
                    login(res);
                    navigate('/');
                }
            });
    }

    return (
        <>
            <form className="auth-forms" acceptCharset="utf-8" onSubmit={handleSubmit(loginHandler)}>
                <label>
                    Email
                    <input {...register("email")} type="email" name="email" placeholder="Your email" id="search-field" className="blink search-field" />
                    {errors.email?.message && <p className="validation-error">{errors.email?.message}</p>}
                </label>
                <label>
                    Password
                    <input  {...register("password")} type="password" name="password" placeholder="Your email" id="search-field" className="blink search-field" />
                    {errors.password?.message && <p className="validation-error">{errors.password?.message}</p>}
                </label>
                <button>Login</button>
            </form>
        </>
    );
}

export default Login;