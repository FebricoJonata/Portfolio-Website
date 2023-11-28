import { useEffect, useState } from "react"
import './index.scss'
import AnimatedLetter from "../AnimatedLetter";
import Loader from 'react-loaders'
import Card from "./Card";
import Switch from "../../assets/images/SWITCH.png"
import HaloIsyra from "../../assets/images/Halo Isyra.png"
import BlueJackP from "../../assets/images/Bluejack Pharmacy.png"
import ChatCircle from "../../assets/images/ChatCircle.png"
import FootPrints from "../../assets/images/FootPrints.png"
import FootLookRE from "../../assets/images/FootLockRE.png"


const Portofolio = () => {
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
        <div className="container portofolio-page">
            <div className="tittle">
                <p className="decoration">&lt;h1&gt;</p>
                <h1>
                    
                    <AnimatedLetter 
                    letterClass={letterClass}
                    strArray={['P', 'o', 'r', 't', 'o', 'f', 'o', 'l', 'i', 'o']}
                    idx={15}
                    />
                </h1>
                <p className="decoration">&lt;/h1&gt;</p>
            </div>
            <div className="card-container">
                <Card
                    imageUrl={Switch}
                    title="Switch"
                    description="Switch is an website platform that connects gamers with the opportunity to securely buy and sell game skins and other in-game attributes."
                    projectUrl="https://github.com/FebricoJonata/SE-Project-Switch"
                />
                <Card
                    imageUrl={HaloIsyra}
                    title="HaloIsyra"
                    description="HaloIsyra is a mobile application design to empower individuals with hearing, speech, and other disabilities, with voice recognition technology."
                    projectUrl="https://www.figma.com/proto/MxuZ4lx0jaI15flPdwjhxh/HALOISYRA?page-id=0%3A1&type=design&node-id=72-704&viewport=208%2C248%2C0.11&t=V2mqrHVQt3WGLWzR-1&scaling=scale-down&starting-point-node-id=72%3A704&mode=design"
                />
                <Card
                    imageUrl={BlueJackP}
                    title="Bluejack Pharmachy"
                    description="Bluejack Pharmacy is mobile application that provides catalog of medications, prescription drugs, and over-the-counter products."
                    projectUrl="https://github.com/FebricoJonata/BluejackPharmacy"
                />
                <Card
                    imageUrl={ChatCircle}
                    title="Chat Circle"
                    description="ChatCirle is a Chat mobile application that can connect many people in one platform to communicate each other."
                    projectUrl="https://github.com/FebricoJonata/CircleChat"
                />
                <Card
                    imageUrl={FootPrints}
                    title="Foot Prints"
                    description="Footprints is a mobile app designed for sneaker enthusiasts, crafted using Java, SQLite, and API technology"
                    projectUrl="https://github.com/FebricoJonata/FootPrints"
                />
                <Card
                    imageUrl={FootLookRE}
                    title="FootLookRE"
                    description="FootLookRE is a website designed for sneaker enthusiasts, crafted using HTML, CSS, and Javascript"
                    projectUrl="https://github.com/FebricoJonata/FootLockerRE"
                />
            </div>
        </div>
        <Loader type="pacman"/>
    </>
    )
}

export default Portofolio