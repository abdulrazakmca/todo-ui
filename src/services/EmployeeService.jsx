import React from 'react'
import axios from 'axios';
const baseUrl = "http://localhost:8080/api/ems/all";

const EmployeeService = () => axios.get(baseUrl);


export default EmployeeService


// export default function EmployeeService() {
//     axios.get(baseUrl+"/all").then((response)=>{      
//         console.log(response.data);  
//     }).catch((error)=>{

//         console.log(error);
//     });

//   return (
//     <div>
      
//     </div>
//   )
// }
