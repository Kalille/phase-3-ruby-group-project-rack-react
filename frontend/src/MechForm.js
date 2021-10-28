import React,{useState} from 'react';




const MechForm =()=>{
const [name, setName]=useState("")
const [age,setAge]=useState("")
const [experience,setExperience]=useState("")

    const handleChange1 =(e)=>{
            setName(e.target.value)
}

    const handleChange2 =(e)=>{
            setAge(e.target.value)
    }

    const handleChange3 =(e)=>{
            setExperience(e.target.value)
        }

    const handleSubmit=(e)=>{
  
   
        fetch('http://localhost:9292/mechanics',{
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                        'Accept':'application/json'},
            body: JSON.stringify({
            
                name: name,
                age:   age,
              experience: experience
               
              
            })
            }).then(res=>res.json())
           
         
           
          
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
           
                <input onChange={handleChange1} value={name} placeholder="name"/>
                <br/>
                <input onChange={handleChange2} value={age} placeholder="age"/>
                <br/>
                <input onChange={handleChange3} value={experience} placeholder="experience" />
                <br/>
                <button type="submit">add new </button>
            </form>
        </div>
    )
}

export default MechForm;





