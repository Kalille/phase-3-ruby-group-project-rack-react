import React from 'react';
import {Link} from "react-router-dom"

const ClientLink=(props)=>{
   
    return(
        <Link to={`./client/${props.id}`}>
        {`${props.firstname} ${props.lastname}`}
    </Link>   
    )
}

export default ClientLink