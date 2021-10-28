import React from "react";
import {useHistory} from "react-router-dom";

const QueButton =(props)=>{
const history = useHistory()

console.log(props)
  
const OnClick=(e)=>{
    e.preventDefault()
    //  console.log("submit")
    
              const redirect =   history.push(`/MechanicsTable`)

     fetch(`http://localhost:9292/clients/${props.clientid}`,{
         method: "DELETE",

     })
     .then(redirect)
 
 }

    return(
<button type="button "onClick={OnClick}> completed </button>
    )
}

export default QueButton