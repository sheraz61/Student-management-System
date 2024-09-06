import React, { useState ,useEffect} from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './root.jsx'
import AddStudent from './Components/Add/AddStudent.jsx'
import ViewStudent from './Components/View/ViewStudent.jsx'
import { StudentProvider } from './Context'
import ViewTopper from './Components/Topper/ViewTopper.jsx'
import SearchStudent from './Components/Search/SearchStudent.jsx'
function App() {
    const [students, setStudets] = useState([])
    const addStd = (student) => {
        setStudets(prev => [{ id: Date.now(), ...student }, ...prev])
    }
    const editStudent = (id, student) => {
        setStudets((prev) => prev.map((prevStd) => (prevStd.id === id ? student : prevStd)))
    }
    const deleteStudent = (id) => {
        setStudets((prev) => prev.filter((student) => student.id !== id))
    }
    useEffect(() => {
        const students = JSON.parse(localStorage.getItem("students"))
        if (students && students.length > 0) {
            setStudets(students)
        }
      }, [])
      useEffect(() => {
        localStorage.setItem('students', JSON.stringify(students))
      }, [students])

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />}>
                <Route path='' element={<ViewStudent />} />
                <Route path='add' element={<AddStudent/>}/>
            <Route path='topper' element={<ViewTopper/>}/>
            <Route path='search' element={<SearchStudent/>}/>
            </Route>
        )
    )
    return (

        <StudentProvider value={{ students, addStd, editStudent, deleteStudent }}>
<>
            <RouterProvider router={router} />
</>

        </StudentProvider>

    )
}

export default App