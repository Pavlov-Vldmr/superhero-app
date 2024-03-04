// import { Box, Button, Container, Link } from "@mui/material";
import { Container } from "@mui/system";

// import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box';
// import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
// import Container from '@Mui/'

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
                        // height: '100%'
                    }}>
                    <code>Page not found</code>

                    <Button href="/" size="large"
                        // type="test"
                        sx={{
                            width: '10rem',
                            color: '#fff',
                            backgroundColor: '#ffffff22',
                            mt: '.5rem'
                            // top: '50%'

                        }}>
                        To home page
                    </Button>
                    {/* <Link >To home page</Link> */}
                </Box>
            </Container>
        </>
    );
}

export default NotFoundPage;