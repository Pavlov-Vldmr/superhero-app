import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

function NotFoundPage() {
    return (
        <>
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
                    <Button href="/" size="large"
                        sx={{
                            width: '10rem',
                            color: '#fff',
                            backgroundColor: '#ffffff22',
                            mt: '.5rem'
                        }}>
                        To home page
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default NotFoundPage;