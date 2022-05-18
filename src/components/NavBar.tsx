import { AppBar, Toolbar, Tabs, Tab, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";

const NavBar = () => {

    return (
        <AppBar elevation={0} color="transparent">
            {/* <Container > */}
                <Toolbar variant="dense" disableGutters sx={{justifyContent:'center'}}>
                    <Tab
                        disableRipple
                        label={
                            <Typography
                                variant="h5"
                                sx={{ textTransform: "none" }}
                            >
                                home
                            </Typography>
                        }
                        component={Link}
                        to={"/"}
                    />
                    <Tab
                        disableRipple
                        label={
                            <Typography
                                variant="h5"
                                sx={{ textTransform: "none" }}
                            >
                                about
                            </Typography>
                        }
                        component={Link}
                        to={"/about"}
                    />
                    <Tab
                        disableRipple
                        label={
                            <Typography
                                variant="h5"
                                sx={{ textTransform: "none" }}
                            >
                                mission
                            </Typography>
                        }
                        component={Link}
                        to={"/mission"}
                    />
                    <Tab
                        disableRipple
                        label={
                            <Typography
                                variant="h5"
                                sx={{ textTransform: "none" }}
                            >
                                staff
                            </Typography>
                        }
                        component={Link}
                        to={"/staff"}
                    />
                    <Tab
                        disableRipple
                        label={
                            <Typography
                                variant="h5"
                                sx={{ textTransform: "none" }}
                            >
                                visit
                            </Typography>
                        }
                        component={Link}
                        to={"/visit"}
                    />
                    <Tab
                        disableRipple
                        label={
                            <Typography
                                variant="h5"
                                sx={{ textTransform: "none" }}
                            >
                                contact
                            </Typography>
                        }
                        component={Link}
                        to={"/contact"}
                    />
                    <Tab
                        disableRipple
                        label={
                            <Typography
                                variant="h5"
                                sx={{ textTransform: "none" }}
                            >
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
