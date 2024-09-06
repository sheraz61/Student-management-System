import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <nav className='sticky top-0'>
            <div className='h-24 p-2 bg-[#3D434B] flex items-center justify-center flex-col '>
<h1 className='h-12 p-2 bg-[#3D434B] flex items-center justify-center text-2xl font-bold text-white'>Student Management System</h1>

                <ul className='flex gap-9 items-center justify-center'>
                    <li className=' text-2xl font-bold'>
                        <NavLink
                            to='/add'
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0FA3B1] " : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0FA3B1] lg:p-0`
                            }
                        >
                            Add Student
                        </NavLink>
                    </li>
                    <li className='text-2xl font-bold'>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0FA3B1] " : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0FA3B1] lg:p-0`
                            }
                        >
                            Veiw Student
                        </NavLink>
                    </li>
                    <li className='text-2xl font-bold'>
                        <NavLink
                            to='/topper'
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0FA3B1] " : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0FA3B1] lg:p-0`
                            }
                        >
                            Veiw Topper
                        </NavLink>
                    </li>
                    <li className='text-2xl font-bold'>
                        <NavLink
                            to='/search'
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0FA3B1] " : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0FA3B1] lg:p-0`
                            }
                        >
                            Search By Name
                        </NavLink>
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Header