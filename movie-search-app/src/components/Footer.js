import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Footer = () =>{
    return(
        <div className='container_footer'>
            <p> 
                View source code at 
                <span className='social_icons_inline'><FontAwesomeIcon icon={faGithub}/></span>
                @Hang Nguyen - 2001
            </p>
            <p>Contact me </p>
            <p> <span className='social_icons'> <FontAwesomeIcon icon={faFacebook}/></span>
                <span className='social_icons'><FontAwesomeIcon icon={faGithub}/></span>
                <span className='social_icons'><FontAwesomeIcon icon={faLinkedin}/></span>
                <span className='social_icons'><FontAwesomeIcon icon={faCodepen}/></span></p>
        </div>
    )

}

export default Footer