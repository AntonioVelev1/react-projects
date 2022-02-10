function Card({
    info
}) {  
    return (
        
        <>
            <div>
                <p>Event type: {info.e}</p>
                <p>Event time: {info.E}</p>
                <p>Symbol: {info.s}</p>
                <p>Aggregate trade: {info.a}</p>
                <p>Price: {info.p}</p>
            </div>
            <div id="myChart" style={ {maxWidth: "700px;"}, {height: "400px"} }></div>
        </>
    );
}

export default Card;