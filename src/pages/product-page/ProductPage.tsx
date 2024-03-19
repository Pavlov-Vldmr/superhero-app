import ProductItem from "../../components/ProductItem/ProductItem";
import { Container } from "@mui/system";
function ProductPage() {
    return (
        <>
            <Container maxWidth='lg' className='containerTest' sx={{
                backgroundColor: '#181D1E',
                marginTop: '20px',
                clipPath: 'polygon(100% 0, 100% 90%, 95% 100%, 0 100%, 0 0)'
            }}>
                <ProductItem></ProductItem>
            </Container>
        </>
    );
}

export default ProductPage;