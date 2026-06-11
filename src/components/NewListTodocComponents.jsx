import React, { useState } from 'react'

export default function NewListTodocComponents() {
    const dummyData=[
    {"id": 1, "title": 'Core java', "description": 'Core java is the basic of java programming language', "completed":false},
    {"id": 2, "title": 'Srping Boot', "description": 'This is the description for Todo 2', "completed":false},
    {"id": 3, "title": 'Srping Core', "description": 'This is the description for Todo 3', "completed":true}
];
  const [todos,setTodos]=useState(dummyData);

  return (
    <div>
          <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
       
      {
        map.todos(todo=>
            <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed?yes:no}</td>

            </tr>
        )

      }
      </tbody>
      </table>
    </div>
  )
}
