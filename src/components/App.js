//statefull component
import React, { useState } from "react";
import Form from "./Form";
import Home from "../views/Home";
import Rute from "../rute/Rute"
import About from "../views/About"
import { Router } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const App=()=>{
    const books =[
        {name:"ABCD",author:"Me"},
        {name:"EFGH",author:"Another Me"}
    ]
    const [inputText,setInputText]=useState("")
    const [displayText,setDisplayText]=useState("")
    const updatetext=()=>{
        setDisplayText(inputText)
    }
    
    return(
        <div>
            {/*<Router>*/}
                <Rute/>
            {/*</Router>*/}
        </div>
    )
}
export default App;