// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKAvatar from "../../../components/MKAvatar";
import MKButton from "../../../components/MKButton";
import MKTypography from "../../../components/MKTypography";

function Profile({username, currentUser}) {
    return (
        <MKBox component="section" py={{xs: 6, sm: 12}}>
            <Container>
                <Grid container item xs={12} justifyContent="center" mx="auto">
                    <MKBox mt={{xs: -5, md: -10}} textAlign="center">
                        <MKAvatar src={"/assets/images/avatars/rocknrollcat.gif"} alt="rocknrollcat" size="xxl"
                                  shadow="xl"/>
                    </MKBox>
                    <Grid container justifyContent="center" py={6}>
                        <Grid item xs={12} md={7} mx={{xs: "auto", sm: 6, md: 1}}>
                            <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <MKTypography
                                    variant="h3">{username.charAt(0).toUpperCase() + username.slice(1, username.length)}</MKTypography>
                                <MKButton variant="outlined" color="info" size="small">
                                    {currentUser === username ? "Edit" : "Follow"}
                                </MKButton>
                            </MKBox>
                            <Grid container spacing={3} mb={3}>
                                <Grid item>
                                    <MKTypography component="span" variant="body2" fontWeight="bold">
                                        0&nbsp;
                                    </MKTypography>
                                    <MKTypography component="span" variant="body2" color="text">
                                        Posts
                                    </MKTypography>
                                </Grid>
                                <Grid item>
                                    <MKTypography component="span" variant="body2" fontWeight="bold">
                                        13.5m&nbsp;
                                    </MKTypography>
                                    <MKTypography component="span" variant="body2" color="text">
                                        Followers
                                    </MKTypography>
                                </Grid>
                                <Grid item>
                                    <MKTypography component="span" variant="body2" fontWeight="bold">
                                        1&nbsp;
                                    </MKTypography>
                                    <MKTypography component="span" variant="body2" color="text">
                                        Following
                                    </MKTypography>
                                </Grid>
                            </Grid>
                            <MKTypography variant="body1" fontWeight="light" color="text">
                                Full time backend developer, part time les paul player, life time cat lover.
                            </MKTypography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Profile;