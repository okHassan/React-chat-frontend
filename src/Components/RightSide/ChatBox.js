import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import ChatArea from './ChatArea';

const ChatBox = () => {
  return (
    <div className='w-[770px]'>
       <div className='w-full h-[50px] flex justify-between items-center border-b-2 border-black'>
            <div class="shrink-0 flex relative">
              <img class="h-12 w-12 rounded-full" src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="ChitChat Logo"/>
              <div className='w-[18px] h-[18px] bg-lime-500 absolute z-50 border-[4px] border-[white] rounded-full left-8'></div>
              <div>
                <h1 className='text-[20px] text-black font-mono font-bold ml-2'>Sleipner</h1>
                <h1 className='text-[14px] text-gray-500 font-mono ml-3 mb-2'>online</h1>
              </div>
            </div>
            <BsThreeDotsVertical size={30}/>
        </div>
        <ChatArea/>
    </div>
  )
}

export default ChatBox