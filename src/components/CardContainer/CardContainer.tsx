import { Container } from "@mui/system";
import Grid from '@mui/material/Unstable_Grid2';
import CardItem from "../CardItem/CardItem";
import { IHero } from "../../models/heroModel";

function CardContainer(props: { data: IHero[]; }) {

    const data = props.data as IHero[]

    return (
        <>
            <Container maxWidth="lg">
                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {data.slice(0, 20).map((el, index) => (

                        <Grid xs={4} sm={4} md={4} key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <CardItem key={el.id} item={el}></CardItem>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default CardContainer;
