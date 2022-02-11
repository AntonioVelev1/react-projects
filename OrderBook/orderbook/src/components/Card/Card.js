import { useState } from 'react';
import TableData from '../TableData/TableData';

let socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth10');

function Card() {
    const [bids, setBids] = useState([]);
    const [asks, setAsks] = useState([]);


    socket.onopen = function (e) {
        console.log('Test from open');
    };

    socket.onmessage = function (e) {
        const json = JSON.parse(e.data);
        console.log(json)
        try {
            if ((json.lastUpdateId)) {
                setBids(json.bids.slice(0, 5));
                setAsks(json.asks.slice(0, 5));
            }
        } catch (err) {
            console.log(err);
        }

        // console.log('Test from onmessage');
        // console.log(JSON.parse(e.data));
        // setState(JSON.parse(e.data));
    }

    return (
        <>
            <div> Bids:
                {bids.join(' , ')}
            </div>
            <div> Asks
                {asks.join(' , ')}
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Buy Order</th>
                            <th>Price(USDT)</th>
                            <th>Amount(BTC)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Buyer 1</td>
                            <td>{asks[0]}</td>
                        </tr>
                        <tr>
                            <td>Buyer 2</td>
                            <td>{asks[1]}</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Sell Order</th>
                            <th>Price(USDT)</th>
                            <th>Amount(BTC)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableData list={bids} />
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Card;