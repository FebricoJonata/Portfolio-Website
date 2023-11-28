import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetter from '../AnimatedLetter'
import { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    const latitude = -6.187866;
    const longitude = 106.783030;

    useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

        // Cleanup function
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_ausgjb9', 'template_trortln', form.current, 'yZNTlrJ_g2QLBchx56')
            .then(
                () => {
                alert('Message successfully sent!')
                window.location.reload(false)
                },
                () => {
                alert('Failed to send the message, please try again')
                }
            )
    }


    return (<>
    <div className='container contact-page'>
        <div  className='text-zone'>
            <h1>
                <AnimatedLetter 
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                idx={15}
                />
            </h1>
            <p>I'm excited to connect with fellow tech enthusiasts, potential collaborators, and anyone interested in discussing technology, coding, or creative ideas.<br/> Don't hesitate to reach out!</p>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required/>
                        </li>
                        <li>
                            <input type='text' name='subject' placeholder='subject' required/>
                        </li>
                        <li>
                            <textarea name='message' placeholder='Message' required></textarea>
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='SEND'/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className='map-wrap'>
        <MapContainer center={[latitude, longitude]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[latitude, longitude]}>
            <Popup>My Location</Popup>
            </Marker>
        </MapContainer>
        </div>
    </div>
    <Loader type='pacman'/>
    </>)
}

export default Contact