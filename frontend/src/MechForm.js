import React,{useState} from 'react';
import { useHistory } from 'react-router';




const MechForm =()=>{
    const [mechanic,setMechanic]=useState([])
    const [loading, setLoading] = useState(false)
    const [name, setName]=useState("")
    const [age,setAge]=useState("")
    const [experience,setExperience]=useState("")
    const history = useHistory()


    const handleChange1 =(e)=>{
            setName(e.target.value)
}

    const handleChange2 =(e)=>{
            setAge(e.target.value)
    }

    const handleChange3 =(e)=>{
            setExperience(e.target.value)
        }

    const HandleSubmit=(e)=>{
                e.preventDefault()
                setLoading(true);

                fetch('http://localhost:9292/mechanics',{
                     method: 'POST',
                     headers: {'Content-Type': 'application/json',
                        'Accept':'application/json'},
                     body: JSON.stringify({
            
                            name: name,
                            age:   age,
                            experience: experience
               
              
            })
            })
            .finally(() => {
                setLoading(false)
              })
            
           history.push("/MechanicsTable")
         
           
          
    }
    if (loading) {
        return <p>Adding Employee...</p>;
    }

    return(
        <div>
            <form onSubmit={HandleSubmit}>
           
                <input onChange={handleChange1} value={name} placeholder="name"/>
                <br/>
                <input onChange={handleChange2} value={age} placeholder="age"/>
                <br/>
                <input onChange={handleChange3} value={experience} placeholder="experience" />
                <br/>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default MechForm;





