import React, { useState ,useEffect} from 'react'
import { useStudent } from '../../Context'
function ViewStudent() {
    const { students, editStudent, deleteStudent } = useStudent()
    const [currentEditStudent, setCurrentEditStudent] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // Search term state
    const [filteredStudents, setFilteredStudents] = useState([...students]);
    const [isRollNoAscending, setIsRollNoAscending] = useState(true); // Track the sorting order for roll number
    const [isNameAscending, setIsNameAscending] = useState(true); // Track the sorting order for name

    useEffect(() => {
        // Filter students by name when the search term changes
        const filtered = students.filter((student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredStudents(filtered);
    }, [searchTerm, students]);

    const update = (student) => {
        setCurrentEditStudent({ ...student });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentEditStudent((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        if (currentEditStudent) {
            editStudent(currentEditStudent.id, currentEditStudent);
            setCurrentEditStudent(null);  // Exit edit mode after saving
        }
    };

    

    // Function to sort by roll number
    const sortRollNo = () => {
        const sorted = [...filteredStudents].sort((a, b) => {
            return isRollNoAscending ? a.rollNo - b.rollNo : b.rollNo - a.rollNo;
        });
        setFilteredStudents(sorted);
        setIsRollNoAscending(!isRollNoAscending); // Toggle sorting order for next click
    };

    // Function to sort by name
    const sortName = () => {
        const sorted = [...filteredStudents].sort((a, b) => {
            return isNameAscending
                ? a.name.localeCompare(b.name) // Ascending
                : b.name.localeCompare(a.name); // Descending
        });
        setFilteredStudents(sorted);
        setIsNameAscending(!isNameAscending); // Toggle sorting order for next click
    };
    return (
        <section className=' h-screen flex items-center justify-center m-4'>
            <div>
                <div className='w-full max-w-3xl p-4 rounded shadow-md border bg-white  border-gray-300'>
                    <div className='p-6 w-full max-w-3xl flex flex-col items-center justify-center  mx-auto rounded shadow-md bg-white border border-gray-300'>
                        <h2 className='text-2xl font-bold mb-2'>View Student</h2>
                        <div className='flex justify-between w-full mb-2 '>
                            <button
                            onClick={sortName}
                                className='bg-gray-500 text-white p-2 rounded  hover:bg-gray-700 '
                            >Name
                            </button>
                            <input type="text"
                                name='search'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder='Enter for Search'
                                className='w-1/2 p-2 text-sm text-gray-700 border border-gray-500 rounded-xl focus:outline-none focue:border-blue-500'
                            />
                            <button
                                className='bg-gray-500 text-white p-2 rounded  hover:bg-gray-700'
                                onClick={sortRollNo}
                            >Roll No</button>
                        </div>
                        <table className='min-w-full bg-white border-collapse border border-gray-200'>
                            <thead>
                                <tr>
                                    <th className='text-gray-800 py-2 px-4 border-b border-gray-200 bg-gray-100'>Name</th>
                                    <th className='text-gray-800 py-2 px-4 border-b border-gray-200 bg-gray-100'>Roll No</th>
                                    <th className='text-gray-800 py-2 px-4 border-b border-gray-200 bg-gray-100'>Marks</th>
                                    <th className='text-gray-800 py-2 px-4 border-b border-gray-200 bg-gray-100'>Age</th>
                                    <th className='text-gray-800 py-2 px-4 border-b border-gray-200 bg-gray-100'>Address</th>
                                    <th className='text-gray-800 py-2 px-4 border-b border-gray-200 bg-gray-100'>Edit</th>
                                    <th className='text-gray-800 py-2 px-4 border-b border-gray-200 bg-gray-100'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredStudents.length > 0 ? (
                                        filteredStudents.map((student) => (
                                            <tr key={student.id} className='text-center'>
                                                <td className='text-gray-500 py-2 px-4 border-b border-gray-200'>{student.name}</td>
                                                <td className='text-gray-500 py-2 px-4 border-b border-gray-200'>{student.rollNo}</td>
                                                <td className='text-gray-500 py-2 px-4 border-b border-gray-200'>{student.marks}</td>
                                                <td className='text-gray-500 py-2 px-4 border-b border-gray-200'>{student.age}</td>
                                                <td className='text-gray-500 py-2 px-4 border-b border-gray-200'>{student.address}</td>
                                                <td className='text-gray-500 py-2 px-4 border-b border-gray-200'>
                                                    <button className='bg-yellow-600 text-white py-1 px-3 rounded hover:bg-yellow-700'
                                                        onClick={() => update(student)}
                                                    >Edit</button>
                                                </td>
                                                <td className='text-gray-500 py-2 px-4 border-b border-gray-200'>
                                                    <button className='bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700'
                                                        onClick={() => deleteStudent(student.id)}
                                                    >Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className='text-center text-gray-500 py-2 px-4'>
                                                No record matches the search term.
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>


                        
                    </div>
                </div>
            </div>
            {currentEditStudent && (  <section className=' h-screen flex items-center justify-center m-4'>

<div className='w-full max-w-3xl p-4 rounded shadow-md border bg-white  border-gray-300'>
    <div className='p-6 w-full max-w-lg mx-auto rounded shadow-md bg-white border border-gray-300'>

        <h2 className='text-2xl font-bold mb-4'>Add Student</h2>
        <form

            onSubmit={handleSave}
            className='space-y-4'
        >
            <label htmlFor="name"
                className='block text-gray-700 font-semibold mb-1'
            >Name: <input type="text"

                name="name"
                id="name"
                value={currentEditStudent.name}
                placeholder='Enter Student Name'
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                value={currentEditStudent.rollNo}
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
                onChange={handleInputChange}
                value={currentEditStudent.age}
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
                onChange={handleInputChange}
                value={currentEditStudent.marks}
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
                    onChange={handleInputChange}
                    value={currentEditStudent.address}
                    required
                    className='p-2 w-full border border-gray-300 rounded outline-none'
                />

            </label>

            <button
                className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >Update Student</button>
        </form>
    </div>

</div>
</section>)}
        </section>
    )
}

export default ViewStudent