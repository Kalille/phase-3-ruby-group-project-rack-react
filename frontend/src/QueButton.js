import React from "react";
import {useHistory} from "react-router-dom";

const QueButton =(props)=>{
const history = useHistory()


const OnClick=()=>{
history.push("/JobQue")
}
    return(
<button onClick={OnClick}> ADD CLIENT INFO </button>
    )
}

export default QueButton