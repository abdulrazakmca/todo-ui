import React from 'react'

export default function StudentObjdestructing(props) {
    const {firstName, lastName, email} = props;
  return (
    <div>
          <div>
        <h1>Student Destructure Component</h1>
        <p>Student First Name: {firstName}</p>
        <p>Student Last Name: {lastName}</p>
        <p>Student Email: {email}</p>
    </div>

    </div>
  )
}
