import React, { useEffect, useState } from "react";
import "../styles/Form.css"

const Form =({items})=>{

    const [inputText,setInputText]=useState("")
    const [displayText,setDisplayText]=useState(null)
    const [loading,setLoading] = useState(false)

    const updateText=()=>{
        setDisplayText(inputText)
    }
    const change =(e)=>{
        setInputText(e.target.value)
    }
    
    const handlePredict = async() => {
        setLoading(true);
        try{
            const response = await fetch("http://localhost:8000/predict/",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token 3f3518079c602c8635aaae004d6ebc07e4fe7a50",
                },
                body: JSON.stringify({features: inputText}),
            })
            const data = await response.json()
            console.log(data.prediction)
            setDisplayText(data.prediction)
        }catch(error){
            console.log("error:", error)
        }finally{
            setLoading(false);
        }
    };
    
    return(
        <div className="form">
            <input type="text" value={inputText} onChange={change}/>
            {displayText && <h2>Result: {displayText}</h2>}
            <button onClick={handlePredict} disabled={loading}>{loading ? "Loading...":"Submit"}</button>
            <h1>{items}</h1>
        </div>
    )
}
export default Form