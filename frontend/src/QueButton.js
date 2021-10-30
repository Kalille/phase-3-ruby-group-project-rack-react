import React from "react";
import {useHistory} from "react-router-dom";

const QueButton =(props)=>{
const history = useHistory()
const path = history.location.pathname

  
const OnClick=(e)=>{
        e.preventDefault()
         const redirect =   history.push(`${path}`)
     
        fetch(`http://localhost:9292/clients/${props.clientid}`,{
         method: "DELETE",
        })
        .then(redirect)
        .then(console.log('deleteds'))
 
 }

    return(
        <button type="button "onClick={OnClick}> DELETE </button>
    )
}

export default QueButton