import {useState, UIEvent } from 'react';


import './css/Lift.css'

export const Lift = () => {
    const [show, toggleShow] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [direction, setDirection] = useState('🔽');
    const [floor, setFloor] = useState('Piętro: 10')
    

    const elevator = document.querySelector('.lift-elevator');
    const floors = document.querySelectorAll('.lift-floor')
    
    let options = {
        root: elevator,
        rootMargin: '0px',
        threshold: 0.8,
      };
      
      let whichFloor = (entries: any[], observer: any) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            setFloor(entry.target.innerHTML);
          }
        });
      };

      let observer = new IntersectionObserver(whichFloor, options);
      
      floors.forEach((floor) => {
        observer.observe(floor);
      });
    
    
    const handleScroll = (event: UIEvent<HTMLDivElement>) => {
        
        let prevScrollPos = event.currentTarget.scrollTop;
        setScroll(Math.round(event.currentTarget.scrollTop));
        
        scroll > prevScrollPos ? setDirection('🔼') 
        : setDirection('🔽')
    };



    return (
        <>
        <div className='App'>
            <button className='button' onClick={() => toggleShow(!show)}>
                {show ? 'Hide' : 'Show Lift'}
            </button>
        </div>
        {show &&
        <div className='lift-p'>
            <p>Zadanie polega na symulowaniu działania windy, umożliwiając jej poruszanie się w górę i w dół, oraz wyświetlanie 
                aktualnego piętra, a także kierunku poruszania się na podstawie aktualnego scrolla.</p>
        </div> }
        {show &&
        <div className = 'lift-body'>
            <div className="lift-direction">
            {floor} {direction}
            </div>
            <div className="lift-elevator" onScroll={handleScroll}>
                <div className="lift-floor">
                    Piętro 10
                </div>
                <div className="lift-floor">
                    Piętro 9
                </div>
                <div className="lift-floor">
                    Piętro 8
                </div>
                <div className="lift-floor">
                    Piętro 7
                </div>
                <div className="lift-floor">
                    Piętro 6
                </div>
                <div className="lift-floor">
                    Piętro 5
                </div>
                <div className="lift-floor">
                    Piętro 4
                </div>
                <div className="lift-floor">
                    Piętro 3
                </div>
                <div className="lift-floor">
                    Piętro 2
                </div>
                <div className="lift-floor">
                    Piętro 1
                </div>
                <div className="lift-floor">
                    Piętro 0
                </div>
            </div>
        </div>
}
        </>
    )
}