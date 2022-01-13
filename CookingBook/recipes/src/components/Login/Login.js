import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices';
import { useAuthContext } from '../../hooks/useAuthContext';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userLoginSchema } from '../../validations/UserValidation';

function Login() {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(userLoginSchema),
    });

    const onLoginHandler = (data, e) => {
        e.preventDefault(); 

        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');

        authService.login({email, password})
            .then((data) => {
                login(data);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });

    };

    return (
        <form className="contact100-form validate-form" onSubmit={handleSubmit(onLoginHandler)}>
            <div className="wrap-input100 rs1-wrap-input100 validate-input">
                <span className="label-input100">Email</span>
                <input {...register("email")} className="input100" type="text" name="email" placeholder="Enter your email addess" /> 
                <span className="focus-input100"></span>
                { errors.email?.message && <p className="validation-error">{errors.email?.message}</p>}
            </div>

            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Password</span>
                <input {...register("password")} className="input100" type="password" name="password" placeholder="Enter your passwords" />
                <span className="focus-input100"></span>
                { errors.password?.message && <p className="validation-error">{errors.password?.message}</p>}
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

export default Login;