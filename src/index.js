import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SimpleBlog from './Latihan/SimpleBlog';
import SimpleUser from './Latihan/SimpleUser';
import ViewPage from './Latihan/ViewPage';
import About from './Latihan/About';
import Hobby from './Latihan/Hobby';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <Header></Header> */}
      <div className="container">
        <Routes>
          <Route exact path="/" element={<SimpleUser />} />
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/hobby" element={<Hobby />}></Route>
          <Route exacy path="/view/:id" element={<ViewPage />}></Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
