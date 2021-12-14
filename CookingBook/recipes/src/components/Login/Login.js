import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices';
import { useAuthContext } from '../../hooks/useAuthContext';

function Login() {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault(); 

        let formData = new FormData(e.currentTarget);
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
        <form className="contact100-form validate-form" onSubmit={onLoginHandler}>
            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <span className="label-input100">Email</span>
                <input className="input100" type="text" name="email" placeholder="Enter your email addess" />
                <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Password</span>
                <input className="input100" type="password" name="password" placeholder="Enter your passwords" />
                <span className="focus-input100"></span>
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