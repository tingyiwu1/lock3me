import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Mission from "./components/Mission";
import Staff from "./components/Staff";
import Visit from "./components/Visit";
import Contact from "./components/Contact";
import Archives from "./components/Archives";
import NavBar from "./components/NavBar";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#ffffff",
        },
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#000000",
        },
    },
    typography: {
        fontFamily: '"Times New Roman", "Helvetica", "Arial", sans-serif',
        
    },
});

function App() {
    if (process.env.NODE_ENV === "development") {
        axios.defaults.baseURL = "https://api.logiclock.quest";
    } else {
        axios.defaults.baseURL = "https://api.logiclock.quest";
    }
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container maxWidth={"sm"} sx={{ justifyContent: "center" }}>
                {/* <Box width={"md"}> */}
                    <NavBar />
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/about"} element={<About />} />
                        <Route path={"/mission"} element={<Mission />} />
                        <Route path={"/staff"} element={<Staff />} />
                        <Route path={"/contact"} element={<Contact />} />
                        <Route path={"/archives"} element={<Archives />} />
                        <Route path={"/*"} element={"not found"} />
                    </Routes>
                {/* </Box> */}
            </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
