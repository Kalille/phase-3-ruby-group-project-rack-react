import React, {useState}from "react";
import {useEffect,} from "react"
import QueTable from './QueTable'
import ClientLink from "./ClientLink";
import QueButton from "./QueButton";



const AssignmentChart = (props)=>{
    const [mechanic, setMechanic]= useState([])
    // const [loading, setLoading] = useState(false)
console.log(props)
console.log(mechanic)
 
const {clients }= mechanic

// console.log(clients)
    useEffect(()=>{
        // setLoading(true);
     
        // const id = props.match.params.id
        fetch(`http://localhost:9292/mechanics/${props.id}`)
        .then(res=>res.json())
        .then(setMechanic)
        .catch(err=>console.log(err))
        // .finally(() => {
        //     setLoading(false);
        //   });

    },[props.id])
   
    // if (loading) {
    //     return <p>Data is loading...</p>;
    // }
    return(
      
<div>
{/* <QueTable mechanic={mechanic}/> */}
     <table className='clients-table'>
         <thead>
            <tr>
                <th> Name</th>
              
                <th>Make</th>
                <th>model</th>
                <th>year</th>
                <th>Fixed</th>

            </tr>
         </thead>
         <tbody> 
    
                             { clients ? clients.map((client,i)=>(
                                
                       <tr key={i}>
                              {/* <ClientLink 
                                   
                                   id={client.id}
                       
                                   firstname={client.first_name}
                                   lastname={client.last_name}
                      
                               /> */}

                        <td className="active-row">{`${client.first_name} ${client.last_name}`}</td> 
                               <td>{client.make}</td>
                               <td>{client.model}</td>
                               <td>{client.year}</td>
                               <QueButton clientid={client.id} mechid={props.id}/>
                           </tr>      
                                        )) : null }
                                        
                           </tbody>
    
 </table> 
</div>
    )
}


export default AssignmentChart