import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/deleteEmployee">Delete</NavLink>
          <NavLink to="/addEmployee">Add</NavLink>
          <NavLink to="/viewEmployee">View</NavLink>
          <NavLink to="/updateEmployee">Edit</NavLink>
       </div>
    );
}
 
export default Navigation;
