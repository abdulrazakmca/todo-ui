import { useState } from "react";
import React from 'react'

export default function User() {
    let userObj = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'John@example.com'
    };

    const [user, setUser] = useState(userObj);

//    // const [user, setUser] = React.useState({});

     function handleUser() {
      userObj={
             firstName: 'Ram',
             lastName: 'Kumar',
             email: 'Ram@example.com'
         };
         setUser(userObj);
     }
  return (
    <div>
      
        <h1>User Details Component</h1>

        <p>User First Name: {user.firstName}</p>
        <p>User Last Name: {user.lastName}</p>
        <p>User Email: {user.email}</p>
        {/* <button onClick={updateUser}>Get User Details</button> */}
        <button onClick={handleUser}>Get UserDetails</button>
    </div>
  )
}
