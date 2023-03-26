import {Helmet} from 'react-helmet-async';
// @mui
import {Container, Typography} from '@mui/material';
// components
import {ProductList} from '../../sections/@dashboard/products';
// mock
import PRODUCTS from '../../_mock/products';
import Footer from "../../layouts/footer";

// ----------------------------------------------------------------------

export default function ProductsPage() {
    return (
        <>
            <Helmet>
                <title> Auction </title>
            </Helmet>

            <Container style={{paddingTop: '64px'}}>
                <Typography variant="h4" sx={{mb: 3}}>
                    Guitars
                </Typography>

                <ProductList products={PRODUCTS}/>
            </Container>

            <Footer/>
        </>
    );
}
