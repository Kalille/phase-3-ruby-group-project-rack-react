import React from "react";
import {NavLink} from 'react-router-dom'

const link ={
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'black',
    textDecoration: 'none',
    color: 'white'
}

const NavBar=()=>{
    return(
        <div>
          <NavLink
           to='/'
           exact
           style={link}
           activeStyle={{
               background: 'gray'
           }}
           >
               HOME
           </NavLink>
           <NavLink
           to='/MechanicsTable'
           exact
           style={link}
           activeStyle={{
               background: 'gray'
           }}
           >
              Mechanics
           </NavLink>
           <NavLink
           to='/ClientsPage'
           exact
           style={link}
           activeStyle={{
               background: 'gray'
           }}
           >
              CLIENT INFO
           </NavLink>
        </div>
    )


}
export default NavBar