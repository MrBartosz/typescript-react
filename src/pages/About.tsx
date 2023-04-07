import './About.css'
   
                
export const About  = () => {
    return (
        <>
            <div className='About-body'>
                <div className='About-body1'>
                    <div className='About-download'>Pobierz CV</div>
                    <div className='About-name' >Bartosz Maksimowski</div>
                    <div className='About-photo-container'> <img className='About-photo' src="https://fv9-4.failiem.lv/thumb_show.php?i=3qbg4nn5f&download_checksum=cd8b3b106e5d835a00744fb53214dba8de595cdb&download_timestamp=1680803985" alt="author-photo" /></div> 
                    <div className='About-aboutme-container'>
                        <div className='About-aboutme'>
                            <h3>Hello!</h3>
                            <p> <span className="tab"></span>I am a production engineer who at the very beginning of professional career, decided to seek challenges in the construction industry. 
                                At the age of 24 i became a team leader in a Swedish carpentry company, i have come to the conclusion that my career path will close too quickly, and the lack of development prospects at the age of 35 is unacceptable to me. 
                                I am looking for a company that is focused on continuous improvement in a promising industry, hence my interest in the IT field.
                                <br/><span className="tab"></span>From a young age, I competed on football fields, which taught me how to handle stress. An injury disrupted my plans related to sports, but my addiction to healthy competition transferred to other areas of my life.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}