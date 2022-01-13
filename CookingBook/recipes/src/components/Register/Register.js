import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices';

import { useAuthContext } from '../../hooks/useAuthContext';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
import { userSchema } from '../../validations/UserValidation';

function Register() {   
    const { login } = useAuthContext();
    const navigate = useNavigate();
    
    const  { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(userSchema),
    });


    const onRegisterHandler = (data, e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get('email');
        let username = formData.get('username');
        let password = formData.get('password');
        let rePassword = formData.get('rePassword');

        authService.register({
            email,
            username,
            password,
            rePassword
        })
            .then((data) => {
                login(data);
                navigate('/');
            })
            .catch(err => {
                console.log(err)
            });

    }


    return (
        <form className="contact100-form validate-form" onSubmit={handleSubmit(onRegisterHandler)}>
            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <span className="label-input100">Username</span>
                <input {...register("username")} className="input100" type="text" name="username" placeholder="Enter your username addess" />
                <p className="validation-error">{errors.username?.message}</p>
            </div>

            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <span className="label-input100">Email</span>
                <input {...register("email")} className="input100" type="text" name="email" placeholder="Enter your email addess" />
                <span className="focus-input100"></span>
                <p className="validation-error">{errors.email?.message}</p>
            </div>

            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Password</span>
                <input {...register("password")} className="input100" type="password" name="password" placeholder="Enter your passwords" />
                <span className="focus-input100"></span>
                <p className="validation-error">{errors.password?.message}</p>
            </div>

            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Repeat Password</span>
                <input {...register("rePassword")} className="input100" type="password" name="rePassword" placeholder="Repeat passwords" />
                <span className="focus-input100"></span>
                <p className="validation-error">{errors.rePassword?.message}</p>
            </div>

            <div className="container-contact100-form-btn">
                <button className="contact100-form-btn">
                    <span>
                        Submit
                    </span>
                </button>
            </div>
        </form>
    );
}

export default Register;