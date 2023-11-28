import { useEffect, useState } from 'react';
import AnimatedLetter from '../AnimatedLetter'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders'
import { faAndroid, faHtml5, faJava, faJsSquare, faLaravel, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

        // Cleanup function
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);


    return (<>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetter 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>I am a student at the Bina Nusantara University with a major in Computer Science pursuing an undergraduate degree. I am currently interested in the Mobile Application Development and Web Development field.</p>
                <p>My goal is to get a job in the Information Technology field after graduating. I am open to learning new things and getting involved with new projects that can help me learn or apply all that I have learned throughout my university career.</p>
                <p>I'm actively seeking opportunities in projects, internships, or part-time roles that align with my academic background and career goals. My enthusiasm for learning and adapting to new challenges, along with my strong academic foundation, makes me a motivated candidate ready to contribute to innovative IT projects.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAndroid} color='#A4C639'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color='#61DAFB'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJava} color='#FF5713'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faHtml5} color='#FF5713'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faLaravel} color='#FF2D20'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color='#FFFF00'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
    </>
    )
}

export default About
