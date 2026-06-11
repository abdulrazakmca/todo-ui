import React from 'react'

export default function StudentObj(props) {
  return (
    <div>
      <h1>Student Component Object</h1>
        <p>Student First Name: {props.studentObj.firstName}</p>
        <p>Student Last Name: {props.studentObj.lastName}</p>
        <p>Student Email: {props.studentObj.email}</p>
    </div>
  )
}
