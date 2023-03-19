import PropTypes from 'prop-types';
// @mui
import {styled} from '@mui/material/styles';
import {AppBar, Box, IconButton, Stack, Toolbar} from '@mui/material';
// components
import Iconify from '../../components/iconify';
//
import AccountPopover from './AccountPopover';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({theme}) => ({
    backgroundColor: "transparent",
    boxShadow: 'none',
}));

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    minHeight: HEADER_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
    onOpenNav: PropTypes.func,
};

export default function Header({onOpenNav}) {
    return (
        <StyledRoot>
            <StyledToolbar>
                <IconButton
                    onClick={onOpenNav}
                    sx={{
                        mr: 1,
                        color: 'text.primary',
                        display: {lg: 'none'},
                    }}
                >
                    <Iconify icon="eva:menu-2-fill"/>
                </IconButton>

                <Box sx={{flexGrow: 1}}/>

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{
                        xs: 0.5,
                        sm: 1,
                    }}
                >
                    <AccountPopover/>
                </Stack>
            </StyledToolbar>
        </StyledRoot>
    );
}
