import * as React from 'react';
import { useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { } from './Raiting.css';
import { useAuthContext } from '../../hooks/useAuthContenxt';
import * as rateService from '../../services/rateService';

export default function BasicRating({
    filmId
}) {
    const { user } = useAuthContext();

    const [rate, setRate] = React.useState(0);

    useEffect(() => {
        rateService.getRate({ userId: user.id, filmId: filmId});
    }, []);
    
    return (
        <div className='raiting'>
            <Typography component="legend">Rate here</Typography>
            <Rating
                name="simple-controlled"
                value={rate}
                onChange={(event, newrate) => {
                    setRate(newrate);
                }}
            />
        </div>
    );
}
