import React from 'react'

import { AiFillPlusSquare } from 'react-icons/ai';
import Users from './Users';

const ChatList = () => {
  return (
    <div className='w-[400px]'>
        <div className='w-full h-[50px] flex justify-between items-center border-b-2 border-black'>
            <h1 className='text-[30px] text-black font-mono font-bold'>Sleipner</h1>
            <AiFillPlusSquare size={30}/>
        </div>
        <div>
            <h1 className='mt-[18px] text-[14px] text-slate-500'>ALL CHATS</h1>
            <div className='space-y-3 mt-5'>
              <Users/>
              <Users/>
              <Users/>
            </div>
        </div>
    </div>
  )
}

export default ChatList