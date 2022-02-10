import {} from './Header.css';


let socket = new WebSocket('wss://stream.binance.com:9443');

// const info = fetch('https://binance-docs.github.io/apidocs/spot/en')
//             .then(res => console.log(res.json()));

socket.onopen = function(e) {
    
}

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
            <div>
                <p>{console.log('info')}</p>
            </div>
        </header>
    );
}

export default Header;