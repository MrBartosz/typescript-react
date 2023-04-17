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
import { HabitPath } from '../components/HabitPath';


export const Main = () => {
  const [show, toggleShow] = useState(false);
  const [activeButton, setActiveButton] = useState('null');
  

  const handleButtonClick = (buttonName: string) => {
    if (activeButton === buttonName) {
      setActiveButton('null');
    }
    else {
      setActiveButton(buttonName);
    }
  }
  
 
  

  return (
    <>
      <button className='main_button' onClick={() => toggleShow(!show)}>
        {show ? 'Hide Samples' : 'Show Samples'}
      </button>

      {show &&
        <div className='button-div'>
          <div className='App'>
            <button className='button' onClick={() => handleButtonClick('showMirror')}>
              {activeButton === 'showMirror' ? 'Hide' : 'Show Mirror'}
            </button>
          </div>
          {activeButton === 'showMirror' && 
            <Mirror />
          }

          <div className='App'>
            <button className='button' onClick={() => handleButtonClick('showBulb')}>
              {activeButton === 'showBulb' ? 'Hide' : 'Show Bulb'}
            </button>
          </div>
          {activeButton === 'showBulb' && 
            <Bulb />
          }

          <div className='App'>
            <button className='button' onClick={() => handleButtonClick('showReplica')}>
              {activeButton === 'showReplica' ? 'Hide' : 'Show Replica'}
            </button>
          </div>
          {activeButton === 'showReplica' && 
            <Replica />
          }

          <div className='App'>
            <button className='button' onClick={() => handleButtonClick('showLift')}>
              {activeButton === 'showLift' ? 'Hide' : 'Show Lift'}
            </button>
          </div>
          {activeButton === 'showLift' && 
            <Lift />
          }

          <div className='App'>
            <button className='button' onClick={() => handleButtonClick('showForest')}>
              {activeButton === 'showForest' ? 'Hide' : 'Show Forest'}
            </button>
          </div>
          {activeButton === 'showForest' && 
            <Forest />
          }

          <div className='App'>
            <button className='button' onClick={() => handleButtonClick('showCode')}>
              {activeButton === 'showCode' ? 'Hide' : 'Show Code'}
            </button>
          </div>
          {activeButton === 'showCode' && 
            <Code />
          }

          <div className='App'>
            <button className='button' onClick={() => handleButtonClick('showShoppingCart')}>
              {activeButton === 'showShoppingCart' ? 'Hide' : 'Show ShoppingCart'}
            </button>
          </div>
          {activeButton === 'showShoppingCart' &&
            <ShoppingCart />
          }
          <div className='App'>
            <button className='button' onClick={() => handleButtonClick('showAlert')}>
              {activeButton === 'showAlert' ? 'Hide' : 'Show Alert'}
            </button>
          </div>
          {activeButton === 'showAlert' && 
            <Alert />
          }

          <div className='App'>
            <button className='button' onClick={() => handleButtonClick('showSteps')}>
              {activeButton === 'showSteps' ? 'Hide' : 'Show Steps'}
            </button>
          </div>
          {activeButton === 'showSteps' &&
            <Steps />
          }

          <HabitPath />
        </div>
      }
    </>
  )
}