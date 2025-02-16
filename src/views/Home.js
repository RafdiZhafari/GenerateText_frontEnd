import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainLayout from "../layouts/MainLayout";
import Form from "../components/Form";


const Home=()=>{
    return(
        <div>
            <MainLayout>
                <Form/>
            </MainLayout>
        </div>
    )
}
export default Home;