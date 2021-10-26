import React, {useEffect }from "react";

const QueTable =(props)=>{
console.log(props)
const clients = props.mechanic.clients
console.log(clients)
    return(
        <div>my table
            <table>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>make</td>
                        <td>model</td>
                        <td>year</td>
                    </tr>
                </thead>
                <tbody>
             
            {clients.map((client, i)=>(
                           <tr key={i}>

                               <td >{`${client.first_name} ${client.last_name}`}</td>
                               <td>{client.make}</td>
                               <td>{client.model}</td>
                               <td>{client.year}</td>
                           </tr>
                       ))}
                        
                </tbody>
            </table>
        </div>
    )
}

export default QueTable