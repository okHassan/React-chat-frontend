import React from 'react'

const Users = () => {
  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12 rounded-full" src="https://static-01.daraz.com.bd/p/e29d70726042e0634af1a67abb4e11cf.jpg" alt="ChitChat Logo"/>
        </div>
        <div className='w-full'>
          <div className='flex justify-between'>
            <h1 className="text-xl font-medium text-black">ChitChat</h1>
            <p className='text-gray-500'>17m</p>
          </div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
       
      </div>
    </div>
  )
}

export default Users