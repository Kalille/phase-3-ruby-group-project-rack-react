import React, {useState} from "react";
import {useHistory } from "react-router-dom";

const ClientForm =(props)=>{
const history = useHistory()
const [comment, setComment]=useState([])
console.log(props)
  
const OnClick=(e)=>{
    // e.preventDefault()
     const redirect =   history.push(`/ClientsPage`)
 
    fetch(`http://localhost:9292/clients/${props.id}`,{
     method: "DELETE",
    })
    // .then(redirect)
    

}

const HandleChange =(e)=>{
    setComment(e.target.value)
}


    const HandleSubmit=(e)=>{
    //   e.preventDefault()
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
       
            {/* <button type="submit "onClick={OnClick}> DELETE CLIENT</button> */}

            <button type="submit">SUBMIT NOTES</button>

        </form>
        <button type="submit "onClick={OnClick}> DELETE CLIENT</button>
        </div>
    )
}

export default ClientForm