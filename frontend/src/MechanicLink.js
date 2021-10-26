import React from "react";
import {Link} from "react-router-dom"


const MechanicLink =(props)=>{

    return(
     
                <Link to={`./mechanic/${props.id}`}>
                    {props.name}
                </Link>          
      
    )
}


export default MechanicLink