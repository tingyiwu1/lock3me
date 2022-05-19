import { AppBar, Toolbar, Tabs, Tab, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";

const NavBar = () => {
    return (
        <AppBar elevation={0} color="transparent" position="static">
            <Typography sx={{ textAlign: "center" }}>
                this website was built for desktop viewing
            </Typography>
            {/* <Container > */}
            <Toolbar
                variant="dense"
                disableGutters
                sx={{ justifyContent: "center" }}
            >
                <Tab
                    disableRipple
                    label={
                        <Typography variant="h5">
                            home
                        </Typography>
                    }
                    component={Link}
                    to={"/"}
                />
                <Tab
                    disableRipple
                    label={
                        <Typography variant="h5">
                            about
                        </Typography>
                    }
                    component={Link}
                    to={"/about"}
                />
                <Tab
                    disableRipple
                    label={
                        <Typography variant="h5">
                            mission
                        </Typography>
                    }
                    component={Link}
                    to={"/mission"}
                />
                <Tab
                    disableRipple
                    label={
                        <Typography variant="h5">
                            staff
                        </Typography>
                    }
                    component={Link}
                    to={"/staff"}
                />
                <Tab
                    disableRipple
                    label={
                        <Typography variant="h5">
                            contact
                        </Typography>
                    }
                    component={Link}
                    to={"/contact"}
                />
                <Tab
                    disableRipple
                    label={
                        <Typography variant="h5">
                            archives
                        </Typography>
                    }
                    component={Link}
                    to={"/archives"}
                />
            </Toolbar>
            {/* </Container> */}
        </AppBar>
    );
};

export default NavBar;
