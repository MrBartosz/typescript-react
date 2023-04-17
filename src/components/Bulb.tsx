import { useState } from "react";
import './css/Bulb.css'



export const Bulb = () => {
  const [isActive, setActive] = useState(false)
  
  const onChange = () => {
    setActive(!isActive)

  };
  
  return (
    <>
        <div className="App bulb_app">
            <p className="bulb-p">Zadanie polega na renderowaniu interaktywnej żarówki, umożliwiając jej włączanie i wyłączanie za pomocą przełącznika.</p>
            <div className='bulb'>
                <div className={isActive ? 'bulb__on' : 'bulb__top'}></div>
                <img className="bulb__wire" src="https://i.imgur.com/YHZCVPl.png" alt="Wire" />
                <div className="bulb__bottom"></div>
            </div>
           
            <label htmlFor="light-toggle" className="bulb_checkbox">
                <input  name="light-toggle" id="light-toggle" type="checkbox" onClick={onChange} />
                {isActive ? `Światło włączone` : `Światło wyłączone`}
            </label>
        </div>
    </>
  );
}