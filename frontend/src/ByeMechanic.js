import React from  "react";
import {useHistory} from "react-router-dom";

const ByeMechanic =(props)=>{

    const history = useHistory()
    const path = history.location.pathname
    const OnClick=(e)=>{
        
        const redirect =   history.push(`${path}`)
         fetch(`http://localhost:9292/mechanics/${props.id}`,{
         method: "DELETE",
        })
        history.push(`/MechanicsTable`)
 }


    return(
        <div>
        <button onClick={OnClick}>DELETE</button>
        </div>
    )
}


export default ByeMechanic