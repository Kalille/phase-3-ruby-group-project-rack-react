import React, {useState} from "react";
import {useHistory } from "react-router-dom";

const ClientForm =(props)=>{
const history = useHistory()
const [comment, setComment]=useState([])
console.log(props)
  
    // const HandleSubmit=(e)=>{
    //    e.preventDefault()
    //     console.log("submit")
    //     const direct =   history.push(`/ClientsPage`)
    //     const parsed =parseInt(props.id)
    //     fetch(`http://localhost:9292/clients/${props.id}`,{
    //         method: "DELETE",

    //     })
       
    //     // .then(res=>console.log(res))
    //     // .catch(err=>console.log(err))
    //     .then(direct)
    // }

const HandleChange =(e)=>{
    setComment(e.target.value)
}


    const HandleSubmit=(e)=>{
      
            fetch('http://localhost:9292/comments',{
                method: 'POST',
                headers: {'Content-Type': 'application/json',
                            'Accept':'application/json'},
                body: JSON.stringify({
                
                    comment: comment,
                    
                     client_id: parseInt(props.id)
                   
                  
                })
   
                }).then(res=>res.json())
                .then(data => {
                    setComment({...comment, data})
                })
            }
    


    return(
        <div class="mb-3">
        <form onSubmit={HandleSubmit}>



  <label for="exampleFormControlTextarea1" class="form-label">Please add any notes for customer</label><br/>
  <textarea onChange={HandleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <br/>
       
         {/* <input onChange={HandleChange} as="text-box" size="lg"/> */}
<button type="submit">SUBMIT</button>
{/* <button>update</button> */}
        </form>
        </div>
    )
}

export default ClientForm