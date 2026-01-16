import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <nav className='w-full bg-white shadow-md fixed z-50'>
        <div className='max-w-7xl mx-auto px-4 py-5 flex justify-between items-center'>
            <Link href='/'>
                <Image src='/next.svg' alt='logo' width={100} height={60} className='object-contain' priority/>
            </Link>

            <NavLink/>

            

        </div>
    </nav>
  )
}

export default Navbar