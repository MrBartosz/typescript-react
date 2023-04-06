import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'


export const Contact  = () => {
    return (
        <>

                <div className='contact-body'>
                    <div className='contact-body1'>
                        <div className='contact-h1-container'>
                            <h1>Contact Me</h1>
                        </div>
                            
                        <div className='contact-icon-container'>
                            <div className='contact-icon-block'>
                                <div className='contact-icon'>
                                    <span><FontAwesomeIcon icon={faPhone}/></span>
                                </div> 
                                <div>
                                    <p>
                                        <span className='contact-span'>Phone:</span>
                                        <a href="tel://519635097">+48 519 635 097</a>
                                    </p>
                                </div>
                            </div>
                            <div className='contact-icon-block'>
                                <div className='contact-icon'>
                                    <span><FontAwesomeIcon icon={faPaperPlane} /></span>
                                </div>    
                                <div>
                                    <p>
                                        <span className='contact-span'>Email:</span>
                                        <a href="mailto:maksimowski1997@gmail.com">maksimowski1997@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className='contact-icon-block'>
                                <div className='contact-icon'>
                                    <span><FontAwesomeIcon icon={faLocationDot} /></span>
                                </div>
                                <div>
                                    <p>
                                        <span className='contact-span'>Address:</span>
                                        15-689 Bialystok
                                    </p>
                                </div>    
                            </div>    
                        </div>
                    </div>
                </div>
        </>
    )
}