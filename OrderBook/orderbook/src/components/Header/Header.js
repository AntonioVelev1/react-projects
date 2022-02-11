import { } from './Header.css';

function Header() {
    return (
        <header className="header">
            <nav>
                <div className="title">
                    <p>Order Book</p>
                </div>
                <div className="currency">
                    <label className="dropdown" htmlFor="currency"> Make your choise:
                        <select name="currency">
                            <option>BTC/USDT</option>
                            <option>BTC/ETH</option>
                        </select>
                    </label>
                </div>
            </nav>
        </header>
    );
}

export default Header;