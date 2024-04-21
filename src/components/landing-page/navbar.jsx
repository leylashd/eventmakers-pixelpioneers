import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='fixed left-0 top-0 w-full z-10 easy-in duration-300 '>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white '>
            <Link href='/'>
                <h1 className='font-bold text-4xl '>Devscale</h1>
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4'> Home </li>
                <li className='p-4'> Events </li>
                <li className='p-4'> Contact </li>
            </ul>
        </div>
    </div>
  )
}