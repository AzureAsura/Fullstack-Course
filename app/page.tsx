import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <ul className='p-20'>
        <Link href='/product'>
          <li>Produk</li>
        </Link>
        <Link href='/kategori'>
          <li>Kategori</li>
        </Link>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  )
}

export default page