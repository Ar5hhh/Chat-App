import React from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'


const Logout = () => {

    const Out = async () => {
        await auth.signOut()
        navigate('/')
    }
    let navigate = useNavigate()
    return (
        <button className="learn-more" onClick={Out}>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">LOG OUT</span>
        </button>
    )
}

export default Logout