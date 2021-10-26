import React, {useState} from "react";
import {useHistory } from "react-router-dom";

const ClientForm =(props)=>{
const history = useHistory()

console.log(props)
  
    const HandleSubmit=(e)=>{
       e.preventDefault()
        console.log("submit")
        const direct =   history.push(`/ClientsPage`)
        const parsed =parseInt(props.id)
        fetch(`http://localhost:9292/clients/${props.id}`,{
            method: "DELETE",

        })
       
        // .then(res=>console.log(res))
        // .catch(err=>console.log(err))
        .then(direct)
    }

    


    return(
        <form onSubmit={HandleSubmit}>
         <input as="text-box" size="lg"/>
<button type="submit">Completed</button>
{/* <button>update</button> */}
        </form>
    )
}

export default ClientForm