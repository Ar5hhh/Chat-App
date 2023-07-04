import React from 'react'
import GoogleButton from 'react-google-button'
import { motion } from 'framer-motion'
import { auth } from '../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'




const LogInPage = () => {
    const [user] = useAuthState(auth)
    let navigate = useNavigate()

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
        user && navigate('/chat')
    }
    return (
        <motion.div className='log-container'>
            <motion.h6 initial={{ opacity: 0, x: -100 }} transition={{ delay: 0.2, duration: .3 }} animate={{ opacity: 1, x: 0 }} className='text-secondary'>REACT + FIREBASE</motion.h6>
            <motion.h1 initial={{ opacity: 0, y: 200 }} transition={{ delay: 0.4 }} animate={{ opacity: 1, y: 0 }}>CHAT APP</motion.h1>
            <motion.div initial={{ opacity: 0, y: 100 }} transition={{ delay: 0.7, duration: .2 }} animate={{ opacity: 1, y: 0 }} className='google'><GoogleButton onClick={googleSignIn} /></motion.div>
        </motion.div >
    )
}

export default LogInPage