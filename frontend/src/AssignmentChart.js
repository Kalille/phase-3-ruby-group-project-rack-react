import React, {useState}from "react";
import {useEffect,} from "react"
import QueButton from "./QueButton";



const AssignmentChart = (props)=>{
    const [mechanic, setMechanic]= useState([])
   const {clients }= mechanic

    useEffect(()=>{
  
        fetch(`http://localhost:9292/mechanics/${props.id}`)
        .then(res=>res.json())
        .then(setMechanic)
        .catch(err=>console.log(err))
      

    },[props.id])
   

    return(
      
<div>

     <table className='clients-table'>
         <thead>
            <tr>
                           <th> Name</th>
                           <th>Make</th>
                           <th>model</th>
                           <th>year</th>
                           {/* <th>Fixed</th>                */}
                          

            </tr>
         </thead>
        <tbody> 
    
                             { clients ? clients.map((client,i)=>(
                                
                    <tr key={i}>
                          
                            <td className="active-row">{`${client.first_name} ${client.last_name}`}</td> 
                            <td>{client.make}</td>
                            <td>{client.model}</td>
                            <td>{client.year}</td>
                            {/* <QueButton clientid={client.id} mechid={props.id}/> */}
                    </tr>      
                                        )) : null }
                                        
        </tbody>
    
    </table> 
</div>
    )
}


export default AssignmentChart