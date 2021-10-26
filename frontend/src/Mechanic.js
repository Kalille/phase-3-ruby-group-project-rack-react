import React from "react";
import { useEffect, useState } from "react";
import CarForm from "./CarForm";



const Mechanic = (props) => {
   
    const [mechanic, setMechanic] = useState([]);
    const [loading, setLoading] = useState(false)
    const job = mechanic.clients
    useEffect(() => {
        setLoading(true);
        const id = props.match.params.id
        fetch(`http://localhost:9292/mechanics/${id}`)
        .then(res=>res.json())
        .then(setMechanic)
        .catch(err=>console.log(err))
        .finally(() => {
            setLoading(false);
          });

    },[props.match.params.id])
    if (loading) {
        return <p>Data loading...</p>;
    }
    console.log(props)
    return(
        <div> 
            <h1>mech</h1>
            <h2>{mechanic.name}</h2>
            <CarForm mechanic_id={props.match.params.id}/>
            {/* <h3>{ mechanic ? job.map((client, i)=>(
               
                <h3>{client.first_name}</h3>
            )) : null}</h3> */}
          
        </div>
    )
}
export default Mechanic;


