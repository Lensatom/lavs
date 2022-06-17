import React, { useEffect, useState } from 'react'

import { ChatEnvironment, ChatSidebar } from '../components'

const Chat = props => {

  const [chatSidebar, setChatSidebar] = useState([null, null])

  useEffect(() => {
    const sideAcOrInac = () => {
      if (props.deviceWidth > 820) {
        setChatSidebar([true, true])
      } else if (props.deviceWidth < 820 && props.customer) {
        setChatSidebar([false, true])
      } else {
        setChatSidebar([true, false])
      }
    }

    window.addEventListener('resize', () => sideAcOrInac())

    sideAcOrInac()
  }, [chatSidebar])

  const update = () => {
    setChatSidebar(!chatSidebar)
  }

  return (
    <div className='flex' style={{height: '100%'}}>
      {chatSidebar[0] == true ? <ChatSidebar update={update} /> : ""}
      {chatSidebar[1] == true ? <ChatEnvironment customer={props.customer} /> : ""}
    </div>
  )
}

export default Chat