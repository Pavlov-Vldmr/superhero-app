import { Container } from "@mui/system";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
// import ProductItem from "../../components/ProductItem/ProductItem";
import CardItem from "../CardItem/CardItem";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#181D1E',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function CardContainer() {
    return (
        <>
            <Container maxWidth="lg">
                <code>Home page.tsx</code>
                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {Array.from(Array(8)).map((_, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <CardItem></CardItem>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default CardContainer;
