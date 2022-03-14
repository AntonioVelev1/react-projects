import {} from './Login.css';

function Login() {
    return (
        <>
            <form className="auth-forms" acceptCharset="utf-8">
                <label>
                    Email
                    <input type="text" name="search field" placeholder="Your email" id="search-field" className="blink search-field" />
                </label>
                <label>
                    Password
                    <input type="password" name="search field" placeholder="Your email" id="search-field" className="blink search-field" />
                </label>
                    <button>Login</button>
            </form>
        </>
    );
}

export default Login;