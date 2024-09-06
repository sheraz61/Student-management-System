import React, { useState } from 'react'
import { useStudent } from '../../Context'

function AddStudent() {
    const [Student, setStudent] = useState({
        name: '',
        rollNo: '',
        age: '',
        marks: '',
        address: ''
    })
    const handleChange = (event) => {
        const { value, name } = event.target
        setStudent(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!Student) return
        addStd(Student)
        setStudent({
            name: '',
            rollNo: '',
            age: '',
            marks: '',
            address: ''
        })
    }
    const { addStd } = useStudent()
    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ todo, completed: false })
        setTodo("")
    }
    return (
        <section className=' h-screen flex items-center justify-center m-4'>

            <div className='w-full max-w-3xl p-4 rounded shadow-md border bg-white  border-gray-300'>
                <div className='p-6 w-full max-w-lg mx-auto rounded shadow-md bg-white border border-gray-300'>

                    <h2 className='text-2xl font-bold mb-4'>Add Student</h2>
                    <form

                        onSubmit={handleSubmit}
                        className='space-y-4'
                    >
                        <label htmlFor="name"
                            className='block text-gray-700 font-semibold mb-1'
                        >Name: <input type="text"

                            name="name"
                            id="name"
                            value={Student.name}
                            placeholder='Enter Student Name'
                            onChange={handleChange}
                            required
                            className='p-2 w-full border border-gray-300 rounded outline-none'
                            />
                        </label>
                        <label htmlFor="rollNo"
                            className='block text-gray-700 font-semibold mb-1'

                        > Roll No: <input type="text"
                            name="rollNo"
                            id="rollNo"
                            placeholder='Enter Student Roll No'
                            onChange={handleChange}
                            value={Student.rollNo}
                            required
                            className='p-2 w-full border border-gray-300 rounded outline-none'
                            />
                        </label>
                        <label htmlFor="age"
                            className='block text-gray-700 font-semibold mb-1'

                        > Age: <input type="text"
                            name="age"
                            id="age"
                            placeholder='Enter Student Age'
                            onChange={handleChange}
                            value={Student.age}
                            required
                            className='p-2 w-full border border-gray-300 rounded outline-none'
                            />

                        </label>
                        <label htmlFor="marks"
                            className='block text-gray-700 font-semibold mb-1'

                        >Marks: <input type="text"
                            name="marks"
                            id="marks"
                            placeholder='Enter Student Marks'
                            onChange={handleChange}
                            value={Student.marks}
                            required
                            className='p-2 w-full border border-gray-300 rounded outline-none'
                            />

                        </label>
                        <label
                            className='block text-gray-700 font-semibold mb-1'

                            htmlFor="address">Address: <input type="text"
                                name="address"
                                id="address"
                                placeholder='Enter Student Address'
                                onChange={handleChange}
                                value={Student.address}
                                required
                                className='p-2 w-full border border-gray-300 rounded outline-none'
                            />

                        </label>

                        <button
                            className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        >Add Student</button>
                    </form>
                </div>

            </div>
        </section>

    )
}

export default AddStudent