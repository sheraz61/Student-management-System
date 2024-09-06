import React, { useEffect, useState } from 'react'
import { useStudent } from '../../Context'

function ViewTopper() {
    const { students } = useStudent()

    const [topper, setTopper] = useState(null)
    const findTopper = (students) => {
        if (students.length === 0) return null;

        let topper = students[0];

        students.forEach((student) => {
    
            const currentMarks = Number(student.marks);
            const topperMarks = Number(topper.marks);
        
            if (currentMarks > topperMarks) {
              topper = student;
            }
        });

        return topper;
    };
    useEffect(() => {
        const newTopper = findTopper(students)
        setTopper(newTopper);
    }, [students])

    return (
        <section className=' h-screen flex items-center justify-center m-4'>
            <div className='w-full max-w-3xl p-4 rounded shadow-md border bg-white  border-gray-300'>
               { topper ? ( <div className='p-6 w-full max-w-lg mx-auto rounded shadow-md bg-white border border-gray-300'>
                    <h2 className='text-2xl font-bold mb-4'>Topper</h2>
                    <div>
                        <p className='text-lg text-gray-700 font-semibold'>Name: {topper.name}</p>
                        <p className='text-lg text-gray-700 font-semibold'>Roll NO: {topper.rollNo} </p>
                        <p className='text-lg text-gray-700'>Marks: {topper.marks}</p>
                        <p className='text-lg text-gray-700'>Address: {topper.address} </p>
                    </div>
                    </div>
                    ):(    <p>No students available</p>)
                    }
            
            </div>
        </section>
    )
}

export default ViewTopper