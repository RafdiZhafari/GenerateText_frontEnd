import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({children}) =>{
    return(
        <React.Fragment>
            <Header/>
                {children}
            <Footer/>
        </React.Fragment>
    )
}
export default MainLayout