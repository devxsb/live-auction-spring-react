import PropTypes from 'prop-types';
// @mui
import {Grid} from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default function ProductList({products, ...other}) {
    return (
        <Grid container spacing={3} {...other}>
            {products.map((product) => (
                <Grid key={product.id} item sm={12} md={4}>
                    <ShopProductCard product={product}/>
                </Grid>
            ))}
        </Grid>
    );
}
