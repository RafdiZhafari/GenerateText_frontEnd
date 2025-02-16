import React, { useEffect, useState } from "react"; 
import Form from "../components/Form";
const Api =()=>{

    const [items,setItems] = useState([])

    useEffect(()=>{
        fetch("http://http://localhost:8000/predict/?string=he")
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error("error fetching data: ",error))
    },[]);

    return(
        <Form items={items}/>
    )
}

export default Api