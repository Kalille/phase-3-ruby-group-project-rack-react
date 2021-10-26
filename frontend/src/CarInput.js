import React from "react";

const CarInput =()=>{


    return(
        <div>
            <input onChange={this.handleChange1} placeholder="Make"/>  
            <br/>
            <input onChange={this.handleChange2} placeholder="Model"/> 
            <br/>
            <input onChange={this.handleChange3} placeholder="Year" /> 
        </div>
    )

}
export default CarInput;