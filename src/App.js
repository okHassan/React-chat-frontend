import React from 'react'
import ChatList from './Components/LeftSide/ChatList'
import ChatBox from './Components/RightSide/ChatBox'

const App = () => {
  return (
    <div className='flex justify-between  m-[50px]'>
        <ChatList/>
        <ChatBox/>
    </div>
  )
}

export default App