import {useState} from 'react';
// @mui
import {alpha} from '@mui/material/styles';
import {Avatar, Box, Divider, IconButton, MenuItem, Popover, Stack, Typography} from '@mui/material';
import {logout} from "../../redux/reduxSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
// ----------------------------------------------------------------------

export default function AccountPopover() {
    const [open, setOpen] = useState(null);

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const currentUser = useSelector(state => state.reduxSlice.currentUser)

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleLogout = () => {
        dispatch(logout())
    };

    return (
        <>
            <IconButton
                onClick={handleOpen}
                sx={{
                    p: 0,
                    ...(open && {
                        '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                        },
                    }),
                }}
            >
                <Avatar src={"/assets/images/avatars/rocknrollcat.gif"} alt="photoURL"/>
            </IconButton>

            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                PaperProps={{
                    sx: {
                        p: 0,
                        mt: 1.5,
                        ml: 0.75,
                        width: 180,
                        '& .MuiMenuItem-root': {
                            typography: 'body2',
                            borderRadius: 0.75,
                        },
                    },
                }}
            >
                <Box sx={{my: 1.5, px: 2.5}}>
                    <Typography variant="subtitle2" noWrap>
                        {currentUser}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}} noWrap>
                        {currentUser + "@gmail.com"}
                    </Typography>
                </Box>

                <Divider sx={{borderStyle: 'dashed'}}/>

                <Stack sx={{p: 1}}>
                    <MenuItem key={'Home'} onClick={() => {
                        navigate('/')
                        handleClose()
                    }}>
                        Home
                    </MenuItem>
                    <MenuItem key={'Profile'} onClick={() => {
                        navigate('/' + currentUser)
                        handleClose()
                    }}>
                        Profile
                    </MenuItem>
                </Stack>

                <Divider sx={{borderStyle: 'dashed'}}/>

                <MenuItem onClick={handleLogout} sx={{m: 1}}>
                    Logout
                </MenuItem>
            </Popover>
        </>
    );
}
