import React from "react";
import {BrowserRouter as Router} from "react-router-dom";


import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import '../../styles/adminStyle.css';

export default function Admin() {
  return (
    <Router>
        <Header />
        <Main />
        <Footer />
    </Router>
  );
}