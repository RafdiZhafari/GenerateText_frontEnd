import React from "react";
import { useNavigate,Router,Routes,Route } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import NotFound from "../views/NotFound";

const Rute =()=>{
    return(
        <React.Fragment>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element ={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </React.Fragment>
    )
}

export default Rute