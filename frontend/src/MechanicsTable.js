import React from 'react';
import { useState,useEffect } from 'react';
import MechanicLink from './MechanicLink';
import {useHistory} from 'react-router-dom'


const MechanicsTable = ()=>{
const [mechanics, setMechanics]= useState([]);
const [loading, setLoading] = useState(false)

const mechanicsApi = "http://localhost:9292/mechanics"

useEffect(()=>{
    setLoading(true);
    fetch(mechanicsApi)
    .then(res => res.json())
   .then(setMechanics)
   .finally(() => {
    setLoading(false)
  })
    .catch(err=>console.log(err))
 
},[])

if (loading) {
    return <p>Getting Employees...</p>;
}
    return(
<div>
    <br/>
    WE HAVE THE TOP MECHANICS IN THE CITY
    <center>
    <table className="mech-table">
        <thead>
            <tr>
                <th> Name </th>
                <th> Age </th>
                <th> Years of Experience </th>
                <th>assignments </th>
            </tr>
            </thead>
            <tbody>
            
                    {mechanics.map((mechanic,i) => (
                        <tr key={i}>
                            <td>
                                <MechanicLink 
                                    className="active-row"
                                    id={mechanic.id}
                        
                                    name={mechanic.name}
                       
                                />
                            </td>
                         
                            <td>{mechanic.age}</td>
                            <td>{mechanic.experience}</td>
                            <td>{mechanic.clients.length}</td>
                       </tr>
                      
                      
                    )
                    
                    )}
                       

                    </tbody>
                   
    </table>
  </center>
</div>

    )

}


export default MechanicsTable;