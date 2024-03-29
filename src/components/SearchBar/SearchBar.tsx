import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box';


function SearchBar() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginBottom: '2rem',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            paddingLeft: '3em',
            transition: theme.transitions.create('width'),
            width: '10rem',
            // [theme.breakpoints.up('lg')]: {
            //     width: '100%',
            // },
        },
    }));

    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: 'center'
            }}>
                <Search className='TEST' sx={{
                    marginTop: '2rem',
                    borderTopRightRadius: '20px',
                }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Type name"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <Button
                        type="submit"
                        size="small"
                        variant="contained"
                        sx={{ borderRadius: '0 10px' }}
                    >
                        Search
                    </Button>
                </Search>
            </Box>
        </>
    )
}

export default SearchBar