import './index.scss'
import LogoP from '../../../assets/images/Programming-amico.png';


const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoP} alt='logo'/>
        </div>
    )
}

export default Logo