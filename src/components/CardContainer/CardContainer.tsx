import { Container } from "@mui/system";
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
// import ProductItem from "../../components/ProductItem/ProductItem";
import CardItem from "../CardItem/CardItem";
import { IHero } from "../../models/heroModel";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#181D1E',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));



// function CardContainer(props: IHero[]) {
function CardContainer(props: { data: IHero[]; }) {


    // const data = props as Array<IHero>
    // console.log(typeof (data))
    // console.log(Array.from(data))

    const data = props.data as IHero[]


    return (
        <>
            <Container maxWidth="lg">
                <code>Home page.tsx</code>
                <br></br>
                <code>card container</code>


                {/* <>
                    <ul>
                        {data.slice(0, 20).map((el, index) => (
                            <li key={el.id}>{index + 1}{' : '}{el.name}</li>
                        ))}
                    </ul>
                </> */}

                {/* {JSON.stringify(data[0]?.images?.lg)} */}
                {/* {data[0]?.name} */}
                {/* <>{console.log(data[0].name)}</> */}
                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {/* {Array.from(Array(2)).map((_, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <CardItem></CardItem>
                        </Grid>
                    ))} */}
                    {data.slice(0, 20).map((el, index) => (

                        <Grid xs={4} sm={4} md={4}
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
