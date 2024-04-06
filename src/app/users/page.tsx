import React from 'react'

interface User{
    id: number,
    name: string
}
const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
        {next: {revalidate: 10}}
    );
    const users: User[] = await res.json();
    
  return (
    <>
      <h1 className='text-3xl text-red-600'>Users page</h1>
    </>
  )
}

export default UsersPage
