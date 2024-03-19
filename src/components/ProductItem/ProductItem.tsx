import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import ApexChartBarItem from '../ApexChartBarItem/ApexChartBarItem';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function ProductItem() {
    const el = useLocation().state;
    const PowerstatsList = () => {
        return Object.entries(el.powerstats).map((el, index) =>
            <ApexChartBarItem key={index} stat={el}></ApexChartBarItem>
        )
    }

    return (
        <>
            <Container className='TEST-PHTO_DESCR' sx={{
                display: 'flex',
                paddingTop: '24px'
            }}>
                <img
                    src={el.images.lg}
                    alt={el.name}
                    height="340px"
                    width="fit-content"
                    loading="lazy"
                />
                <Container sx={{}}>
                    <Typography variant="h3" color="#fffeee" minHeight={70}>
                        {el.name}
                    </Typography>
                    <Typography variant="inherit" color="#fffeeecc" minHeight={70} paddingLeft={5}>
                        {'Full Name: ' + el.biography.fullName}
                    </Typography>
                    <Container sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
                        <Typography variant="body2" color="#fffeee" >
                            {'Gender: ' + el.appearance.gender}
                        </Typography>
                        <Typography variant="body2" color="#fffeee" >
                            {'Race: ' + el.appearance.race}
                        </Typography>
                        <Typography variant="body2" color="#fffeee" >
                            {'Work: ' + el.work.occupation}
                        </Typography>
                    </Container>
                </Container>
            </Container>
            <Grid2 container spacing={1} marginY={2} className='TEST-POWERSTATS' justifyContent={'center'} >
                <>  {PowerstatsList()}</>
            </Grid2>
            <Typography variant="caption" color="gray" >
                {'First Appearance: ' + el.biography.firstAppearance}
            </Typography>
        </>
    )
}

export default ProductItem;