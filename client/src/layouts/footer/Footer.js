import React, {FC, ReactElement} from "react";
import {Box, Container, Grid, Typography} from "@mui/material";

const Footer: FC = (): ReactElement => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                marginTop: "5px"
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h5">
                            Safalifter
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary"
                                    variant="subtitle1"
                                    component="a"
                                    href="https://github.com/safalifter/"
                                    target="blank">
                            Safalifter on GitHub
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;