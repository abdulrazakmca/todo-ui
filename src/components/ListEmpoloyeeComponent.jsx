import React,{useEffect, useState} from 'react'
import EmployeeService from '../services/EmployeeService';
export default function ListEmpoloyeeComponent() {
    const employees = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com'
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jan.smith@example.com'  
        },
        {
            id: 3,
            firstName: 'Bob',
            lastName: 'Johnson',
            email: 'bob.johnson@example.com'
        }
    ];

    const [employeeList, setEmployeeList] = useState([]);

    useEffect(()=>{
        //setEmployeeList(employees);
            //fetch data from backend and update the state variable with the data from backend.
            console.log("useEffect called");
            // axios.get("http://localhost:8080/api/ems/all").then((response)=>{
            //     console.log("Data fetched from backend"+response.data);
            // }).catch((error)=>{
            //     console.log(error);
            // });
            EmployeeService().then((response)=>{
               // console.log("Data fetched from backend"+response.data);
                setEmployeeList(response.data);
            }).catch((error)=>{         
                console.log(error);
            });
    },[]);
   // const [employeeList, setEmployeeList] = React.useState(employees);
  return (
    <div className='container'>
        <h1>Employee List</h1>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>            
            <tbody>
                {
                    employeeList.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td> 
                        </tr>
                    )
                }   
            </tbody>
        </table>
    </div>
  )
}
