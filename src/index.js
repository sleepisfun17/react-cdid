import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SimpleUser from './Latihan/SimpleUser';
import ViewPage from './Latihan/ViewPage';
import About from './Latihan/About';
import Hobby from './Latihan/Hobby';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { color, Container } from '@mui/system';
import Tugas6 from './Tugas/tugas6/Tugas6';
import ButtonAppBar from './component/AppBar/ButtonAppBar';
import SearchAppBar from './component/AppBar/SearchAppBar';
import { CommonProvider } from './context/CommonContext';

const theme = createTheme({
  palette: {
    primary: {
      main: process.env.REACT_APP_COLOR_PRIMARY,
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SearchAppBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<SimpleUser />} />
          <Route exact path="/tugas6" element={<Tugas6 />} />
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/hobby" element={<Hobby />}></Route>
          <Route exacy path="/view/:id" element={<ViewPage />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
