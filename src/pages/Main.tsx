import '../App.css'
import { useState } from 'react';
import { Mirror } from '../components/Mirror';
import { Bulb } from '../components/Bulb';
import { Replica } from '../components/Replica';
import { Lift } from '../components/Lift';
import { Forest } from '../components/Forest';
import { Code } from '../components/Code';
import { ShoppingCart } from '../components/ShoppingCart';
import { Alert } from '../components/Alert';
import { Steps } from '../components/Steps';
import { Habit } from '../components/Habit';

export const Main = () => {
  const [show, toggleShow] = useState(false);

  return (
    <>
      <button className='main_button' onClick={() => toggleShow(!show)}>
        {show ? 'Hide Samples' : 'Show Samples'}
      </button>

 

      {show &&
        <div className='button-div'>
          <Mirror />
          <Bulb />
          <Replica />
          <Lift />
          <Forest />
          <Code />
          <ShoppingCart />
          <Alert />
          <Steps />
        </div>
      }
    </>
  )
}