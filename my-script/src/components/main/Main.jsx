import React from "react";
import Company from "./content/company/Company";
import Works from "./content/works/Works";
import Services from "./content/services/Services";
import s from './Main.module.css'
import {Route, Routes} from 'react-router-dom'
import DialogsContainer from "./content/dialogs/DialogsContainer";
import HomeContainer from "./content/home/HomeContainer";
import ReviewsContainer from "./content/reviews/ReviewsContainer";
import Login from "./content/login/Login";

const Main = () => {

    return (
      
        <div className={s.main}>
          <Routes>
            <Route path="/home/:userId" element={<HomeContainer />}/>
            <Route path="/home/" element={<HomeContainer />}/>
            <Route path="/company" element={<Company />}/>
            <Route path="/works" element={<Works />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/reviews" element={<ReviewsContainer />}/>
            <Route path="/dialogs/*" element={<DialogsContainer />}/>
            <Route path="/login/" element={<Login />}/>
          </Routes>          
        </div>
      
    );
}

export default Main