import { useState } from "react";
import React from "react";
import './css/Mirror.css'


export const Mirror = () => {
  const [text, setText] = useState('Enter Your Sentence')
  const [show, toggleShow] = useState(false);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)

  };
  
  const reversed = text.split('').reverse().join('')
  
  return (
    <>

      <div className='App'>
        <button className='button' onClick={() => toggleShow(!show)}>
            {show ? 'Hide' : 'Show Mirror'}
        </button>
        { show && <input type="text" className="text-input" value={text} onChange={onChange} />}
        { show && <span className='mirror'>{reversed}</span>}
      </div>
    </>
  );
}