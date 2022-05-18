import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Mission from './components/Mission';
import Staff from './components/Staff';
import Visit from './components/Visit';
import Contact from './components/Contact';
import Archives from './components/Archives';
import NavBar from './components/NavBar';
import { Container } from '@mui/system';

function App() {
    if (process.env.NODE_ENV === "development") {
        axios.defaults.baseURL = "https://api.logiclock.quest";
    } else {
        axios.defaults.baseURL = "https://api.logiclock.quest";
    }
  return (
    <BrowserRouter>
        <Container maxWidth={'md'}>
            <NavBar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/about'} element={<About />} />
                <Route path={'/mission'} element={<Mission />} />
                <Route path={'/staff'} element={<Staff />} />
                <Route path={'/visit'} element={<Visit />} />
                <Route path={'/contact'} element={<Contact />} />
                <Route path={'/archives'} element={<Archives />} />
                <Route path={'/*'} element={'not found'} />
            </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
