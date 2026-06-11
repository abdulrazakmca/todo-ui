import React, { useEffect } from 'react'
import { getAllTodos } from '../services/Todoservice';

const ListTodoComponents = () => {


const dummyData=[
    {"id": 1, "title": 'Core java', "description": 'Core java is the basic of java programming language', "completed":false},
    {"id": 2, "title": 'Srping Boot', "description": 'This is the description for Todo 2', "completed":false},
    {"id": 3, "title": 'Srping Core', "description": 'This is the description for Todo 3', "completed":true}
];
//first give state variable as empty array.
//second useEffect to call the service method to get the data from backend and update the state variable with the data from backend.
//useEffect takes two parameters callback fuction and paramaters
const [todos, setTodos] = React.useState(dummyData);
useEffect(()=>{
  listTodos();

},[]);

function listTodos(){
  getAllTodos().then((response)=>{
    setTodos(response.data);
  }).catch(error=>{
    console.error(error);
  })
}

//const [todos, setTodos] = React.useState(dummyData);
  return (
    <div className='container'>
      <h2 className='text-center'>List of Todos</h2>
      {/* <ul className='list-group'>
        {todos.map((todo) => (
          <li key={todo.id} className='list-group-item'>
            <h5>{todo.title}</h5>
            <p>{todo.description}</p>
            <span className={`badge ${todo.completed ? 'badge-success' : 'badge-secondary'}`}>
              {todo.completed ? 'Completed' : 'Pending'}
            </span>
          </li>
        ))}
      </ul> */}
         <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           {
            todos.map(todo=>
                <tr key={todo.id}>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>
                        {todo.completed ? 'Yes' : 'No'}
                    </td>
                </tr>
            )           }
          </tbody>
        </table>
    </div>
  )
}

export default ListTodoComponents
