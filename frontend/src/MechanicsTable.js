import React from 'react';
import { useState,useEffect } from 'react';
import MechanicLink from './MechanicLink';
import { useHistory } from 'react-router';
import ByeMechanic from './ByeMechanic';


const MechanicsTable = ()=>{
const [mechanics, setMechanics]= useState([]);
const [loading, setLoading] = useState(false)
const history = useHistory()
const mechanicsApi = "http://localhost:9292/mechanics"

const OnClick=(e)=>{
    e.preventDefault()
    history.push("/")
}

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
                <th></th>
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
                            <ByeMechanic id={mechanic.id} />
                            {/* <button onClick={OnClick}>bye felicia</button> */}
                       </tr>
                      
                      
                    )
                    
                    )}
                       

                    </tbody>
                   
    </table>
  </center>
  <button onClick={OnClick}>refresh to updates</button>
</div>

    )

}


export default MechanicsTable;