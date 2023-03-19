import {Helmet} from 'react-helmet-async';
// @mui
import {styled} from '@mui/material/styles';
import {Button, Container, Divider, Link, Stack, Typography} from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Iconify from '../components/iconify';
// sections
import AuthForm from "../sections/auth/AuthForm";
import {useState} from "react";

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const StyledSection = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function AuthPage() {
    const [isRegistered, setIsRegistered] = useState(true)

    const mdUp = useResponsive('up', 'md');
    return (
        <>
            <Helmet>
                <title>Auth</title>
            </Helmet>

            <StyledRoot>
                {mdUp && (
                    <StyledSection>
                        <Typography variant="h3" sx={{px: 5, mt: 10, mb: 5}}>
                            Hi, Welcome Back!
                        </Typography>
                        <img src="/assets/illustrations/illustration_login.png" alt="login"/>
                    </StyledSection>
                )}

                <Container maxWidth="sm">
                    <StyledContent>
                        <Typography variant="h4" gutterBottom>
                            {isRegistered ? "Sign in" : "Register"} to Auction
                        </Typography>

                        <Typography variant="body2" sx={{mb: 5}}>
                            {isRegistered ? "Don’t have an account? " : "Already have an account? "}
                            <Link variant="subtitle2"
                                  component={"button"}
                                  onClick={() => setIsRegistered(!isRegistered)}
                            > {isRegistered ? "Register" : "Login"}</Link>
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            <Button fullWidth size="large" color="inherit" variant="outlined">
                                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22}/>
                            </Button>

                            <Button fullWidth size="large" color="inherit" variant="outlined">
                                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22}/>
                            </Button>

                            <Button fullWidth size="large" color="inherit" variant="outlined">
                                <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22}/>
                            </Button>
                        </Stack>

                        <Divider sx={{my: 3}}>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                OR
                            </Typography>
                        </Divider>

                        <AuthForm submit={isRegistered ? "login" : "register"}
                                  link={isRegistered ? "Forgot password?" :
                                      "I agree to the terms and conditions"}/>
                    </StyledContent>
                </Container>
            </StyledRoot>
        </>
    );
}