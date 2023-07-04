import React from 'react'
import "./pop.css"
import { auth } from '../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AiOutlineClose } from "react-icons/ai"
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs"
import { motion } from 'framer-motion'

const Popup = ({ setpopup, col }) => {
    const [user] = useAuthState(auth)
    return (
        <motion.div className={col ? `card dark-bar` : "card"} initial={{ opacity: 0, scale: .5 }} transition={{ duration: .2 }} animate={{ opacity: 1, scale: 1 }}>
            <motion.div initial={{ opacity: 0, y: -50 }} transition={{ delay: .2 }} animate={{ opacity: 1, y: 0 }} className='container-fluid px-1 title'><h6>GROUP CHAT</h6><AiOutlineClose className='close' onClick={() => setpopup(false)} /></motion.div>
            {user.photoURL ? <motion.img src={user.photoURL} alt="" onError={() => "this.style.display='none'"} initial={{ opacity: 0, scale: .5 }} transition={{ delay: .3 }} animate={{ opacity: 1, scale: 1 }} /> : null}
            <motion.h4 initial={{ opacity: 0, scale: .5 }} transition={{ delay: .4 }} animate={{ opacity: 1, scale: 1 }}>{user.displayName}</motion.h4>
            <motion.h5 initial={{ opacity: 0, scale: .5 }} transition={{ delay: .6 }} animate={{ opacity: 1, scale: 1 }} >{user.email}</motion.h5>
            <motion.h6 initial={{ opacity: 0, scale: .5 }} transition={{ delay: .7 }} animate={{ opacity: 1, scale: 1 }}>VERIFIED : {user.emailVerified ? <BsHandThumbsUp className='yes' /> : <BsHandThumbsDown className='no' />}</motion.h6>
            <motion.h6 initial={{ opacity: 0, scale: .5 }} transition={{ delay: .7 }} animate={{ opacity: 1, scale: 1 }} className='text-secondary'>CREATED : {user.metadata.creationTime}</motion.h6>
            <motion.div initial={{ opacity: 0, x: -70 }} transition={{ delay: .9, duration: .3 }} animate={{ opacity: 1, x: 0 }} className='container-fluid px-1 text-end text-secondary'>{user.providerId}</motion.div>
        </motion.div>
    )
}
export default Popup