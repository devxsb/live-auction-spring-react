// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../../components/MKBox";

// Author page sections
import Profile from "./sections/Profile";
import {Helmet} from "react-helmet-async";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function Author() {
    const {username} = useParams()

    const currentUser = useSelector(state => state.reduxSlice.currentUser)

    return (
        <>
            <Helmet>
                <title> {username} </title>
            </Helmet>
            <MKBox bgColor="white">
                <MKBox
                    height="50vh"
                    width="100%"
                    sx={{
                        backgroundImage: ({functions: {linearGradient, rgba}, colors: {gradients}}) =>
                            `${linearGradient(
                                rgba(gradients.dark.main, 0.8),
                                rgba(gradients.dark.state, 0.8)
                            )}, url("https://wallpapercave.com/wp/wp2621944.jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "grid",
                        placeItems: "center",
                    }}
                />
                <Card
                    sx={{
                        p: 2,
                        mx: {xs: 2, lg: 7},
                        mt: -5,
                        mb: 4,
                        height: '50vh',
                        backgroundColor: ({colors: {white}, functions: {rgba}}) => rgba(white.main, 0.8),
                        backdropFilter: "saturate(200%) blur(30px)",
                        boxShadow: ({boxShadows: {xxl}}) => xxl,
                    }}
                >
                    <Profile username={username} currentUser={currentUser}/>
                </Card>
            </MKBox>
        </>

    );
}

export default Author;
