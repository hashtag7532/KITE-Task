import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <ul className='flex flex-row p-3 font-bold items-center flex-wrap bg-green-300'>
            <Link href='/'><li className='inline-flex items-center p-2 mr-4'>Home</li></Link>
            <Link href='/users'><li className='inline-flex items-center p-2 mr-4'>Users</li></Link>
            <Link href='/products'><li className='inline-flex items-center p-2 mr-4'>Products</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar