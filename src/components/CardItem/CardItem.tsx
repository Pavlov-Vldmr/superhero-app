import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IHero } from '../../models/heroModel';

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function CardItem(props: { item: IHero }) {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Current location is ', location);
    }, [location]);

    const el = props.item
    return (
        <>
            <Card sx={{
                maxWidth: 300,
                height: '100%',
                width: '100%',
                backgroundColor: "#181D1E",
                color: '#fff',
                clipPath: 'polygon(100% 0, 100% 95%, 95% 100%, 0 100%, 0 0)'
            }}>
                <CardActionArea onClick={() => navigate(`/product`, { replace: false })}>


                    <CardMedia
                        component="img"
                        height="340"
                        image={el.images.lg}
                        alt="test image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {el.name}
                        </Typography>
                        <Typography variant="body2" color="#fffeee" minHeight={70}>
                            {el.work.occupation}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default CardItem;