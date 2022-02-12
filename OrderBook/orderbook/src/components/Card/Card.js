import { useState, useEffect } from 'react';
import TableData from '../TableData/TableData';
import * as socketService from '../../services/socketService';

let socket;

function Card({
    props
}) {
    const [bids, setBids] = useState([]);
    const [asks, setAsks] = useState([]);


       useEffect(() => {
    if (props === 'BTC/USDT') {
        socket = socketService.USDT();
    }
    else if (props === 'BTC/ETH') {
        socket = socketService.ETH();
    }
    }, [props]);

    useEffect(() => {
        if (socket != (undefined)) {
            setInterval(() => {
                socket.onmessage = function (e) {
                    const json = JSON.parse(e.data);
                    console.log(json)
                    try {
                        if ((json.u)) {
                            setBids(json.b.slice(0, 1));
                            setAsks(json.a.slice(0, 1));
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            },3000);

        }
    }, [])


    // console.log('Test from onmessage');
    // console.log(JSON.parse(e.data));
    // setState(JSON.parse(e.data));

    //return () => socket?.close();


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
                            <td>{asks[0]} --------------{asks.length}</td>
                            <td>{asks[1]}</td>
                        </tr>
                        <tr>
                            <td>Buyer 2</td>
                            <td>{asks[0]}</td>
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
                        <tr>
                            <td>Seller 1</td>
                            <td>{bids[0]} ---------- {bids.length}</td>
                            <td>{bids[1]}</td>
                        </tr>
                        <tr>
                            <td>Seller 2</td>
                            <td>{bids[0]}</td>
                            <td>{bids[1]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Card;