import {Helmet} from 'react-helmet-async';
// @mui
import {Container, Typography} from '@mui/material';
// components
import {ProductList} from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function ProductsPage() {
    return (
        <>
            <Helmet>
                <title> Auction </title>
            </Helmet>

            <Container>
                <Typography variant="h4" sx={{mb: 5}}>
                    Guitars
                </Typography>

                <ProductList products={PRODUCTS}/>
            </Container>
        </>
    );
}
