import { useState } from 'react';

import Card from '../Card/Card';
import { } from './Header.css';

function Header() {
    const [currency, setCurrency] = useState('BTC/USDT');

    function onClickHandler(e) {
        e.preventDefault();

        setCurrency(e.target.value);
    }

    return (
        <>
            <header className="header">
                <nav>
                    <div className="title">
                        <p>Order Book</p>
                    </div>
                    <div className="currency">
                        <label className="dropdown" htmlFor="currency"> Make your choise:
                            <select onChange={onClickHandler} name="currency">
                                <option>BTC/USDT</option>
                                <option>BTC/ETH</option>
                            </select>
                        </label>
                    </div>
                </nav>
            </header>
            <div>
                <Card props={currency}/>
            </div>
        </>
    );
}

export default Header;