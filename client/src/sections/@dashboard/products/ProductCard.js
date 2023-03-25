import PropTypes from 'prop-types';
// @mui
import {Box, Card, Link, Stack, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
// utils
import {fCurrency} from '../../../utils/formatNumber';
// components
import {ColorPreview} from '../../../components/color-utils';
import BasicModal from "../../../components/modal";

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    position: 'absolute'
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
    product: PropTypes.object,
};

export default function ShopProductCard({product}) {
    const {name, cover, price, color, link} = product;
    return (
        <Card>
            <Box sx={{pt: '100%', position: 'relative'}}>
                <StyledProductImg alt={name} src={cover}/>
                <BasicModal product={product}/>
            </Box>
            <Stack spacing={2} sx={{p: 3}}>
                <Link color="inherit" underline="hover" variant="a" href={link} target="blank">
                    <Typography variant="subtitle2" noWrap>
                        {name}
                    </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <ColorPreview color={color}/>
                    <Typography variant="subtitle1">
                        <Typography
                            component="span"
                            variant="body1"
                            sx={{
                                color: 'text.disabled',
                                textDecoration: 'line-through',
                            }}
                        >
                        </Typography>
                        &nbsp;
                        {fCurrency(price)}
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    );
}
