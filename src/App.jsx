import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Helloworld from './Helloworld'
import ListTodoComponents from './components/ListTodoComponents'
import NewListTodocComponents from './components/NewListTodocComponents'
import Student from './components/Student'
import StudentObj from './components/StudentObj'
import StudentObjArr from './components/StudentObjArr'
import StudentObjdestructing from './components/StudentObjdestructing'
import User from './components/User'
import EventHandling from './components/EventHandling'
import EmployeeListComponent from './components/ListEmpoloyeeComponent'
function App() {
  const [count, setCount] = useState(0)
   const skills=['HTML','CSS','JavaScript','React'];
  const studentObj={
  firstName:'John',
  lastName:'Doe',
  email:'john@example.com'
  }

  return (
    <>
    {/* <Helloworld/>
     */}
     {/* <ListTodoComponents/>  */}
     {/* <NewListTodocComponents/>
      {/* <Student firstName="John" lastName="Doe" email="John@example.com" /> */}
      {/* <Student firstName="Jane" lastName="Smith" email="Jane@example.com" /> */}
    

    {/* <StudentObj studentObj={studentObj} /> */}
    {/* <StudentObjArr StudentObjArr={skills} /> */}
    {/* <StudentObjdestructing studentObj={studentObj} /> */}
    {/* <User/> */}
    {/* <EventHandling/> */}
    <EmployeeListComponent/>
     </>
  )
 
}

export default App
