import { createContext, useContext } from "react";
export const StudentContext = createContext({
    students: [
        {
            id: 1,
            name: 'sheraz',
            rollNo: '3',
            age: '18',
            marks: '98',
            address: 'sahiwal'
        }
    ],
    addStd: (student) => { },
    editStudent: (id,student) => { },
    deleteStudent: (id) => { }
})
export const useStudent = () => {
    return useContext(StudentContext)
}

export const StudentProvider = StudentContext.Provider