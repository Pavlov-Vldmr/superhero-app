import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Header() {
    return (
        <>
            <Container
                disableGutters={true}
                maxWidth={false}
                sx={{
                    backgroundColor: "#181D1E",
                    display: 'flex',
                    alignItems: 'center'
                }}>

                <Container maxWidth='lg'>
                    <Box
                        height={100}
                        px={2}
                        sx={{
                            display: "flex",
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>

                        {/* <Link href="/" underline="none" color="#fff"> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Open-Sans',
                                fontWeight: 200,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SuperHero App
                        </Typography>
                        {/* </Link> */}
                        <Box>
                            <ButtonGroup
                                color="inherit"
                                disabled={false}
                                size="small"
                                variant="text">
                                <Button>
                                    <Link href="/signin" underline="hover" color="#fff">
                                        {"Sign In"}
                                    </Link>
                                </Button>
                                <Button>
                                    <Link href="/signup" underline="hover" color="#fff">
                                        {"Sign Up"}
                                    </Link>
                                </Button>

                                {/* TODO: Theme change btn */}


                            </ButtonGroup>
                        </Box>
                    </Box>
                </Container>

            </Container>
        </>
    )
}

export default Header;