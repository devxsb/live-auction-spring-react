import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
// @mui
import {Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Box} from '@mui/material';
import {LoadingButton} from '@mui/lab';
// components
import Iconify from '../../components/iconify';
import AuthService from "../../services/AuthService";
import {useDispatch} from "react-redux";
import {login} from "../../redux/reduxSlice";

// ----------------------------------------------------------------------

export default function AuthForm({submit, link}) {
    const navigate = useNavigate();

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)

    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        let body = {
            username: username,
            password: password
        }
        let authService = new AuthService()
        {
            submit === "login" ?
                authService.login(body).then(res => {
                    dispatch(login(res.data))
                    navigate("/")
                }).catch(() => setError(true)) :
                authService.register(body).then(() => {
                    authService.login(body).then(res => {
                        dispatch(login(res.data))
                        navigate("/")
                    }).catch(() => setError(true))
                }).catch(() => setError(true))
        }
    };
    return (
        <Box component="form" onSubmit={e => e.preventDefault()}>
            <Stack spacing={3}>
                <TextField name="username"
                           label="Username"
                           onChange={(e) => {
                               setUsername(e.target.value)
                               setError(false)
                           }}
                           error={error}/>

                <TextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    onChange={(e) => {
                        setPassword(e.target.value)
                        setError(false)
                    }}
                    error={error}/>
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
                <Checkbox name="remember" label="Remember me"/>
                <Link variant="subtitle2" underline="hover">
                    {link}
                </Link>
            </Stack>

            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
                {submit}
            </LoadingButton>
        </Box>
    );
}
