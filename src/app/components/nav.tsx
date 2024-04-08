import React from 'react'
import Link from 'next/link'

const nav = () => {
  return (
    <header>
        <nav className=' bg-secondary shadow-md flex justify-between items-center p-4'>
            <Link href='/'>Home</Link>
            <Link href='/dashbord'>Dashbord</Link>
        </nav>
    </header>
  )
}

export default nav
