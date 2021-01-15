import React, {useEffect,useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
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
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '20%' }}>First Name</th>
                        <th style={{ width: '20%' }}>Last Name</th>
                        <th style={{ width: '20%' }}>Email</th>
                        <th style={{ width: '20%' }}>Employee ID</th>
                        <th style={{ width: '20%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {error ? <li>{error.messages}</li> : 
                        employees.map((employee,index) =>
                        <tr key={index}>
                            <td>{employee.emp_id} {employee.firstName} {employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.role}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="/UpdateEmployee" className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button className="btn btn-sm btn-danger btn-delete-user" disabled={employee.isDeleting}>
                                    {employee.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!employees &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {employees && !employees.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>

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
