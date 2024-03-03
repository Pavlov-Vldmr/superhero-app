import Container from "@mui/material/Container/Container";
import CardContainer from "../../components/CardContainer/CardContainer";
import SearchBar from "../../components/SearchBar/SearchBar";

function HomePage() {
    return (
        <>
            <Container maxWidth='lg'>
                <SearchBar></SearchBar>
                <CardContainer></CardContainer>
            </Container>
        </>
    );
}

export default HomePage;