import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



function CardItem() {
    return (
        <>
            <Card sx={{
                maxWidth: 300,
                backgroundColor: "#181D1E",
                color: '#fff',
                clipPath: 'polygon(100% 0, 100% 95%, 95% 100%, 0 100%, 0 0)'
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="340"
                        image="./src/assets/images/1116.jpg"
                        alt="test image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="#fffeee">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default CardItem;