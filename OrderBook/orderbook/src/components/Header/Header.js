import { useState, useEffect } from 'react';

import Card from '../Card/Card';
import { } from './Header.css';


let socket = new WebSocket('wss://stream.binance.com:9443/ws/ethbtc@aggTrade');

socket.onopen = function (e) {
    console.log('Test from open');
};


function Header() {
    const [state, setState] = useState({});

    socket.onmessage = function (e) {
        console.log('Test from onmessage');
        console.log(JSON.parse(e.data));
        setState(JSON.parse(e.data));
    }

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
            <div>
                <Card info={state}/>
            </div>
        </header>
    );
}

export default Header;