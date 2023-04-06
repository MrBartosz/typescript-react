import './About.css'
   
                
export const About  = () => {
    return (
        <>
            <div className='About-body'>
                <div className='About-body1'>
                    <div className='About-download'>Pobierz CV</div>
                    <div className='About-name' >Bartosz Maksimowski</div>
                    <div className='About-photo-container'> <img className='About-photo' src="https://scontent.fqyy1-1.fna.fbcdn.net/v/t39.30808-6/276158999_7411489098923616_258837933699286952_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9K2aAy5o5pIAX9KjqB7&_nc_ht=scontent.fqyy1-1.fna&oh=00_AfCWMQYPlr4mrzllictxb0JKBpcAiNfuTc5N3Yci1AkUVw&oe=64323AD3" alt="author-photo" /></div> 
                    <div className='About-aboutme-container'>
                        <div className='About-aboutme'>
                            <h3>Hello!</h3>
                            <p> <span className="tab"></span>I am a production engineer who at the very beginning of professional career, decided to seek challenges in the construction industry. 
                                After 2 intense years of work and training, i have come to the conclusion that my career path will close too quickly, and the lack of development prospects at the age of 35 is unacceptable to me. 
                                I am looking for a company that is focused on continuous improvement in a promising industry, hence my interest in the IT field.
                                <br/><span className="tab"></span>From a young age, I competed on football fields, which taught me how to handle stress. An injury disrupted my plans related to sports, but my addiction to healthy competition transferred to other areas of my life.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}