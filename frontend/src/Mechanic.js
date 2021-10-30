import React from "react";
import { useEffect, useState } from "react";
import CarForm from "./CarForm";
import AssignmentChart from "./AssignmentChart";



const Mechanic = (props) => {
   
    const [mechanic, setMechanic] = useState([]);
    const [loading, setLoading] = useState(false)
 
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
            <AssignmentChart id={props.match.params.id}/>
          </div>
    )
}
export default Mechanic;


