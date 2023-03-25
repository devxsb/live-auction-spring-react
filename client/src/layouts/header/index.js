import PropTypes from 'prop-types';
// @mui
import {styled} from '@mui/material/styles';
import {AppBar, Box, Stack, Toolbar} from '@mui/material';
import AccountPopover from './AccountPopover';
// ----------------------------------------------------------------------


const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({}) => ({
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

export default function Header() {
    return (
        <StyledRoot>
            <StyledToolbar>
                <Box sx={{flexGrow: 1}}/>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{
                        xs: 0.5,
                        sm: 1,
                    }}>
                    <AccountPopover/>
                </Stack>
            </StyledToolbar>
        </StyledRoot>
    );
}
