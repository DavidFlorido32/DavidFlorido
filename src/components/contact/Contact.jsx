import './contact.scss'
import {useContext, useState} from 'react'
import { ThemeContext } from '../context'

export default function Contact() {

    const [message, setMessage] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit= (e)=>{
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" style={{backgroundColor: darkMode && "#555"}}/>
                <div className="info">
                </div>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email"/>
                    <textarea placeholder="Message" style={{backgroundColor: darkMode && "#333"}}></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP</span>}
                </form>
            </div>
        </div>
    )
}
