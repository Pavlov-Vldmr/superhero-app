import Container from "@mui/material/Container/Container";
import CardContainer from "../../components/CardContainer/CardContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useRequest } from "../../hooks/useRequest";

function HomePage() {
    const data = useRequest();

    return (
        <>
            <Container maxWidth='lg'>
                <SearchBar></SearchBar>
                <CardContainer data={data}></CardContainer>
            </Container>
        </>
    );
}

export default HomePage;