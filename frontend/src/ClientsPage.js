import React,{useState} from "react";
import {useEffect} from "react";
import ClientLink from "./ClientLink";

const ClientsPage = ()=>{
const [clients, setClients]= useState([])
const [loading, setLoading] = useState(false)
useEffect(()=>{
    setLoading(true);
    fetch('http://localhost:9292/clients')
    .then(res=>res.json())
    .then(data =>setClients(data))
    .finally(() => {
        setLoading(false)
      })
        .catch(err=>console.log(err))
       
    },[])
   
    if (loading) {
        return <p>Getting your Clients...</p>;
    }

    return(
        <div>
            <table className='clients-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>make</th>
                        <th>model</th> 
                        <th>year</th>
                    </tr>
                </thead>
               <tbody>
                 
                       {clients?clients.map((client, i)=>(
                           <tr key={i}>
                               <td>
                                   <ClientLink 
                                   
                                    id={client.id}
                        
                                    firstname={client.first_name}
                                    lastname={client.last_name}
                       
                                />
                                </td>
                               <td>{client.make}</td>
                               <td>{client.model}</td>
                               <td>{client.year}</td>
                           </tr>
                           
                       )) : null}
                   
               </tbody>
            </table>
           
        </div>
    )
}

export default ClientsPage