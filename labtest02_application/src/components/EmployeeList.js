import React, {useEffect,useState} from 'react'
import axios from 'axios'

export const EmployeeList =() =>{
    const initialEmployeeState = {
        id: "",
        firstName: "",
        lastName: "",
        emailID: ""
      };
    
    
    const[employees, setEmployees] = useState(initialEmployeeState)
    const[load,setLoad] = useState(false)
    const [error, setError] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:8080/employees')
        .then(res=>{
            setEmployees(res.data)
            setLoad(true)
        })
        .catch(err=>{
            setError(err.message)
            setLoad(true)
        })
    }, [])

   

    if(load){
        return(
            <>
            <h1>Employee List</h1>
            <ul>
                {error ? <li>{error.messages}</li> : 
                employees.map((employee,index)=> <li key={index}>
                   First Name:  {employee.firstName} //
                   Last Name: {employee.lastName} //
                   Email ID: {employee.emailID}  //
                   Employee ID: {employee.emp_id} </li>)}
            </ul>
            <button >Update</button>
            <button >Delete</button>
            <button>View</button>
            </>
        )
    } else{
        return(
            <div>
                Loading Data
            </div>
        )
    }
}