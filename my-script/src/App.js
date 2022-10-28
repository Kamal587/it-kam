import React from "react";
import Footer from "./components/footer/Footer";

import Main from "./components/main/Main";
import Navbar from "./components/navBar/Navbar";
import './App.css'
import HeaderContainer from "./components/header/HeaderContainer";




const App = () => {

  return (
   
    
      <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        <Main/>
        <Footer />
      </div>
    
  );
};

export default App;
