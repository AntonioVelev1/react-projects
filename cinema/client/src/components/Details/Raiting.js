import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { } from './Raiting.css';
import { useAuthContext } from '../../hooks/useAuthContenxt';
import * as rateService from '../../services/rateService';

export default function BasicRating({
    movie
}) {
    const { user } = useAuthContext();

    const [rate, setRate] = useState(0);
    const [dbRate, setdbRate] = useState({ rate: 0, userId: 0, movieId: 0 });

    useEffect(() => {
        if (valid(user?._id) && valid(movie?._id)) {
            rateService.getRate({ userId: user?._id, movieId: movie?._id })
                .then(res => {
                    if (valid(res)) {
                        setRate(res.rate);
                        setdbRate(res);
                    }
                });
        } else {

        }
    }, [movie]);

    function valid(input) {
        return input !== '' && input !== undefined && input !== null;
    }

    function changeRateHandler(e) {
        e.preventDefault();
        let currentRate = Number(e.target.value);

        if (dbRate.rate === 0) {
            rateService.createRate({ rate: currentRate, userId: user._id, movieId: movie._id })
                .then((res) => {
                    if (res !== undefined) {
                        setRate(res.rate);
                        setdbRate(res);
                    }
                });
        } else {
            rateService.updateRate({ rateId: dbRate._id, rate: currentRate, userId: user._id, movieId: movie._id })
                .then((res) => {
                    if (res !== undefined) {
                        setRate(res.rate);
                        setdbRate(res);
                    }
                });
        }
    }

    function deleteRateHandler(e) {
        e.preventDefault();

        rateService.deleteRate({ rateId: dbRate._id, userId: user._id, movieId: movie._id })
            .then((res) => {
                if (res !== undefined) {
                    setRate(0);
                    setdbRate({ rate: 0, userId: 0, movieId: 0 });
                }
            });
    }

    return (
        <div className='raiting'>
            <Typography component="legend">Rate here</Typography>
            <Rating
                name="simple-controlled"
                value={rate}
                onChange={changeRateHandler}
            />
            <p className="text-left"><Link to="#" onClick={deleteRateHandler}>Remove Rate</Link></p>
        </div>
    );
}
