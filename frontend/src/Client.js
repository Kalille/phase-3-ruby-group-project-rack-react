import React, {useEffect, useState}from "react";
import ClientForm from "./ClientForm"



const Client =(props)=>{
 

    const [client,setClient]=useState([])
    const [loading,setLoading]=useState(false)
const {comments} = client
        // useEffect(()=>{

        //     fetch(`http://localhost:9292/comments/${id}`)
        // })



    useEffect(()=>{
       
        setLoading(true)
        const id = props.match.params.id
        fetch(`http://localhost:9292/clients/${id}`)
       
        // .then(res=>console.log(res))
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
        <div class="container-fluid">
            <h1>CLIENTS </h1>
            <h2>{client.first_name}</h2>
            <ClientForm id={props.match.params.id}/>
            <div class="container-fluid">{client.comments ? client.comments.map((comment)=>(
             <ul> <p> {comment.comment}</p></ul>
            )) : null}</div>
           
        </div>
    )
}

export default Client


