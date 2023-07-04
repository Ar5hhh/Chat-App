import React, { useEffect } from 'react'
import "./msg.css"
import { auth } from '../Firebase'


const Message = ({ message, scroll }) => {
    useEffect(() => {
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }, [scroll])
    const MsgClass = message.uid === auth.currentUser.uid ? "sent" : "received"
    return (
        <div className={`message ${MsgClass}`}>
            <p className='msg-name'>{message.name}</p>
            <p className='msg'>{message.text}</p>
            {message.timestamp?.seconds ? <p className='msg-name'>{new Date(message.timestamp.seconds).toLocaleString()}</p> : <p className="py-2"></p>}
        </div>
    )
}

export default Message