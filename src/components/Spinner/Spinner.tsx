import CircularProgress from '@mui/material/CircularProgress';
import { Container, Box } from '@mui/material';

function Spinner() {
    return (

        <Container maxWidth="sm">
            <Box
                display="flex"
                justifyContent="center"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '10rem'
                }}>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </Box>
        </Container>


    );
}

export default Spinner