import React, {useEffect, useState}from "react";
import ClientForm from "./ClientForm"


const Client =(props)=>{
 
console.log(props)
    const [client,setClient]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        const id = props.match.params.id
        fetch(`http://localhost:9292/clients/${id}`)
        .then(res=>res.json())
        .then(setClient)
        .finally(() => {
            setLoading(false);
          });
},[props.match.params.id])

if (loading) {
    return <p>Data loading...</p>;
}
    return(
        <div>
            <h1>Client  </h1>
            <h2>{client.first_name}</h2>
            <ClientForm id={props.match.params.id}/>
        </div>
    )
}

export default Client