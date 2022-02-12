let socketUSDT = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth');
let socketETH = new WebSocket('wss://stream.binance.com:9443/ws/ethbtc@depth');

export const openSocets = () => {
    socketUSDT.onopen = function (e) {
        console.log('Test from open');
    };

    socketETH.onopen= function (e) {
        console.log('Test from open');
    };
}

export const USDT = () => {
    return socketUSDT;
}

export const ETH = () => {
    return socketETH;
}