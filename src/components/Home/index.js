import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetter from '../AnimatedLetter'
import Logo from './Logo';
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['F', 'e', 'b', 'r', 'i', 'c', 'o', ' ', 'J', 'o', 'n', 'a', 't', 'a']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']


    useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

        // Cleanup function
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (<>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, <br/> I'm&nbsp; 
                <span className='name'>
                    <AnimatedLetter letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                </span>
                    <br/>
                    <AnimatedLetter letterClass={letterClass}
                    strArray={jobArray}
                    idx={15}/>
                </h1>
                {/* <Link to='/contact' className='flat-btn'>CONTACT ME</Link> */}
                <Link to='https://binusianorg-my.sharepoint.com/personal/febrico_jonata_binus_ac_id/_layouts/15/guestaccess.aspx?share=EWGkHgbaZU1LibzXuz9Z5IgBexsK1AroImkB45dJTqN22Q&e=OmBwsQ' target='_blank' className='flat-btn'>Download CV</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman'/>
    </>);
}
export default Home