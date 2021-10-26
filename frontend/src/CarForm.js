import React, { useEffect}from "react";
import {useState} from "react";
import AssignmentChart from "./AssignmentChart";
import {useHistory } from "react-router-dom";









const CarForm =(props)=>{
    // const [mechanic, setMechanic]=useState([])
    const [firstName, setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [make,setMake]=useState("")
    const [model,setModel]=useState("")
    const [year,setYear]=useState("")
    
        const handleChange1 =(e)=>{
                setFirstName(e.target.value)
    }
    
        const handleChange2 =(e)=>{
                setLastName(e.target.value)
        }
    
        const handleChange3 =(e)=>{
                setMake(e.target.value)
            }
            const handleChange4 =(e)=>{
                setModel(e.target.value)
            }
            const handleChange5 =(e)=>{
                setYear(e.target.value)
            }
            const history = useHistory()

          
        const HandleSubmit=(e)=>{
  e.preventDefault()
            // const mech_page = history.push(`/Mechanic/${props.match.params.id}`)
          const direct =   history.push(`/AssignmentChart/${props.mechanic_id}`)
            fetch('http://localhost:9292/clients',{
                method: 'POST',
                headers: {'Content-Type': 'application/json',
                            'Accept':'application/json'},
                body: JSON.stringify({
                
                    first_name: firstName,
                    last_name:   lastName,
                     make: make,
                     model: model,
                     year: year,
                     mechanic_id: parseInt(props.mechanic_id)
                   
                  
                })
   
                })
                
                .then(direct)
               
              
        }

        // useEffect(()=>{
        //     fetch('http://localhost:9292/mechanics')
        //     .then(res=>res.json())
        //     .then(data=>setMechanic(data))
            
        // },[])

        // const OnClick=()=>{
        //     const history = useHistory()
        //     history.push("/JobQue")
        // }

      
        return(
            <div>
                <form onSubmit={HandleSubmit}>
            
                    <label>New Client</label> <br/>
                    <input onChange={handleChange1} value={firstName} placeholder="first name"/>
               
                    <input onChange={handleChange2} value={lastName} placeholder="last name"/>
                    <br/>
                    
                    <input onChange={handleChange3} value={make} placeholder="make" />
                    <br/>
                    <input onChange={handleChange4} value={model} placeholder="model" />
                    <br/>
                    <input onChange={handleChange5} value={year} placeholder="year" />
                    <br/>
                    <button  type="submit">add new </button>
                </form>
            </div>
        )
    }
    
    export default CarForm;