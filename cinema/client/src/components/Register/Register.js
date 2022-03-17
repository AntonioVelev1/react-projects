import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContenxt';
import * as authService from '../../services/authService';
import { } from '../Login/Login.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userRegisterSchema } from '../../validatons/UserValidation';


function Register() {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const  { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(userRegisterSchema),
    });

    function registerHandler(_, e) {
        e.preventDefault();

        let formData = new FormData(e.target);
        let data = {
            email: formData.get('email'),
            username: formData.get('username'),
            password: formData.get('password'),
            rePassword: formData.get('rePassword'),
        }

        authService.register(data)
            .then((res) => {
                if(res.errors) {
                    navigate('/');
                } else {
                    login(data);
                    navigate('/');
                }
            });
    }

    return (
        <form className="auth-forms" acceptCharset="utf-8" onSubmit={handleSubmit(registerHandler)}>
            <label>
                Username
                <input {...register("username")} type="text" name="username" placeholder="Your username" id="search-field" className="blink search-field" />
                {errors.username?.message && <p className="validation-error">{errors.username?.message}</p>}
            </label>
            <label>
                Email
                <input {...register("email")} type="text" name="email" placeholder="Your email" id="search-field" className="blink search-field" />
                {errors.email?.message && <p className="validation-error">{errors.email?.message}</p>}
            </label>
            <label>
                Password
                <input {...register("password")} type="password" name="password" placeholder="Password" id="search-field" className="blink search-field" />
                {errors.password?.message && <p className="validation-error">{errors.password?.message}</p>}
            </label>
            <label>
                Repeat Password
                <input {...register("rePassword")} type="password" name="rePassword" placeholder="Repet Password" id="search-field" className="blink search-field" />
                {errors.rePassword?.message && <p className="validation-error">{errors.rePassword?.message}</p>}
            </label>
            <button type='submit'>Register</button>
        </form>
    );
}

export default Register;