import {} from '../Login/Login.css';

function Register() {
    return (
        <form className="auth-forms" acceptCharset="utf-8">
            <label>
                Username
                <input type="text" name="search field" placeholder="Your username" id="search-field" className="blink search-field" />
            </label>
            <label>
                Email
                <input type="text" name="search field" placeholder="Your email" id="search-field" className="blink search-field" />
            </label>
            <label>
                Password
                <input type="password" name="search field" placeholder="Password" id="search-field" className="blink search-field" />
            </label>
            <label>
                Password
                <input type="password" name="search field" placeholder="Repet Password" id="search-field" className="blink search-field" />
            </label>
            <button>Login</button>
        </form>
    );
}

export default Register;