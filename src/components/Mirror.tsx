import { useState } from "react";
import React from "react";
import './css/Mirror.css'


export const Mirror = () => {
  const [text, setText] = useState('Enter Your Sentence')
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)

  };
  
  const reversed = text.split('').reverse().join('')
  
  return (
    <>
        <div className="mirror-container">
          <p className="mirror-p">Zadanie polega na renderowaniu interaktywnego lusterka, pozwalając na wpisywanie tekstu w polu tekstowym i wyświetlanie go w lustrze w odwróconej formie.</p>
          <input type="text" className="text-input" value={text} onChange={onChange} />
          <span className='mirror'>{reversed}</span>
        </div>
    </>
  );
}