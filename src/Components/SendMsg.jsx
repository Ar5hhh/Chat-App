import React, { useState } from 'react'
import { auth, db } from '../Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'


const SendMsg = ({ scroll, settexting, col }) => {
    const [input, setinput] = useState('')

    const SendMessage = async (e) => {
        e.preventDefault();
        if (input === "") {
            alert("ENTER VALID MESSAGE")
            return
        }
        const { uid, displayName } = auth.currentUser
        setinput("")
        settexting(false)
        scroll.current.scrollIntoView({ behavior: 'smooth' })
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        scroll.current.scrollIntoView({ behavior: 'smooth' })

    }
    return (
        <form onSubmit={SendMessage} >
            <input type="text" value={input} className={col ? "dark-mode" : ""} onChange={(e) => {
                setinput((e.target.value))
                if (e.target.value) {
                    settexting(true)
                }
                else settexting(false)

            }} placeholder='Message' />
            <button className='button' type='submit'>
                <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                    </div>
                </div>
                <span>Send</span>
            </button>
        </form>
    )
}

export default SendMsg