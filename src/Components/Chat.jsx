import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import Message from './Message'
import { auth } from '../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { motion } from 'framer-motion'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../Firebase'
import SendMsg from './SendMsg'
const Chat = ({ setpopup, col, setcol }) => {
    const [user] = useAuthState(auth)
    let [msg, setmsg] = useState([])
    let [texting, settexting] = useState(false)
    const scroll = useRef()

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let msg = [];
            querySnapshot.forEach((doc) => {
                msg.push({ ...doc.data(), id: doc.id });
            });
            setmsg(msg);
        });
        return () => unsubscribe();
    }, [])

    return (
        <motion.div>
            {user && <motion.div className='main-container'>
                <motion.div className='side-container'>
                    <Sidebar setpopup={setpopup} col={col} setcol={setcol} />
                </motion.div>
                <motion.div className='chat-container' initial={{ opacity: 0 }} transition={{ delay: .5 }} animate={{ opacity: 1 }}>
                    <div className='chat-main'>
                        {msg && msg.map((message) => {
                            return <Message key={message.id} message={message} scroll={scroll} />
                        })}
                        {texting && <span className='texting text-secondary'>{user.displayName} is typing...</span>}
                        <SendMsg scroll={scroll} settexting={settexting} col={col} setcol={setcol} />
                        <span ref={scroll}></span>
                    </div>
                </motion.div>
            </motion.div>}
        </motion.div>
    )
}

export default Chat