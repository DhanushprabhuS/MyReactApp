import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Test from './Components/Test';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import TestScroll from './Components/TestScroll';
function App() {
return (
  <React.Fragment>
    <Router>
      <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Lib" element={<TestScroll/>}></Route>
        <Route exact path="/Logout" element={<Home/>}></Route>
        <Route exact path="/TestScroll" element={<TestScroll/>}></Route>
      </Routes>
      </div>
    </Router>
    </React.Fragment>
  );
}

export default App;
