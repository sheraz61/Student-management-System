import React, { useState } from 'react'
import { useStudent } from '../../Context';

function SearchStudent() {
    const { students } = useStudent()
    const [result, setResult] = useState(null)
    const [searchClicked, setSearchClicked] = useState(false);
    const [searchValue, setSearchValue] = useState({
        search: ''
    })
    const handleChange = (e) => {
        setSearchClicked(false)
        const { value, name } = e.target;
        setSearchValue((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchClicked(true)
        const searchResult = students.find((std) => std.name.toLowerCase() === searchValue.search.toLowerCase());
        setResult(searchResult)
    }
    return (
        <section className=' h-screen flex items-center justify-center m-4'>
            <div className='w-full max-w-3xl p-4 rounded shadow-md border bg-white  border-gray-300'>
                <div className='p-6 w-full max-w-lg mx-auto rounded shadow-md bg-white border border-gray-300'>
                    <h2 className='text-2xl font-bold mb-2'>Search Student</h2>
                    <div>
                        <label htmlFor="search"
                            className='block text-gray-700 font-semibold mb-1'
                        >NAME
                            <input
                                id='search'
                                type="text"
                                name='search'
                                onChange={handleChange}
                                className='p-2 w-full border border-gray-300 rounded outline-none'
                            />
                        </label>
                    </div>
                    <button
                        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={handleSubmit}
                    >Search Student</button>
                    {
                        searchClicked && result ? (
                            <div className=" text-black mt-4 p-4 border border-gray-300 rounded">
                                <p><strong>Name:</strong> {result.name}</p>
                                <p><strong>Roll Number:</strong> {result.rollNo}</p>
                                <p><strong>Age:</strong> {result.age}</p>
                                <p><strong>Marks:</strong> {result.marks}</p>
                                <p><strong>Address:</strong> {result.address}</p>
                            </div>
                        ) : searchClicked && !result ? (
                            <p className=" mt-4 text-2xl text-center text-red-900 font-semibold">No student found with this Name "{searchValue.search}".</p>
                        ) : null
                    }

                </div>
            </div>
        </section>
    )
}

export default SearchStudent