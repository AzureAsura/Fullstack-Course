import Link from 'next/link'
import React from 'react'

const navlink = [
    {href: '/create', title: 'Create'},
]

const NavLink = () => {
  return (
    <div>
        <ul className='flex gap-6 font-medium'>
            {navlink.map((link) => (
                <Link href={link.href} key={link.title}>
                    <li>{link.title}</li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default NavLink