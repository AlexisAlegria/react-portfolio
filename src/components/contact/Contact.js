import "./contact.scss";
import {useState} from "react";

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="./assets/paper-plane.png" alt=""/>
            </div>
            <div className="right">
                <h1>Contact me</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply as soon as I can</span>}
                </form>
            </div>
        </div>
    )
}
