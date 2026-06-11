import React from 'react'

export default function Student(props) {
     return (
    <div>
        <h1>Student Component</h1>
        <p>Student First Name: {props.firstName}</p>
        <p>Student Last Name: {props.lastName}</p>
        <p>Student Email: {props.email}</p>
    </div>
  )
}
