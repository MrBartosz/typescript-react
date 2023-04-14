import { useState } from 'react';
import './css/Code.css'

export const Code = () => {
    const [show, toggleShow] = useState(false);
    const [code, setCode] = useState('')
    const [hidden, setHidden] = useState('')
    const [toShow, setToShow] = useState(false)

    const add = (letter: string) => {
        if(code.length < 6)  {
            setToShow(false)
            setHidden(hidden + '*')
            setCode(code + letter)
        }
    }
    const reset = () => {
        setHidden('')
        setCode('')
        setToShow(false)
    }

    const save = () => {
        setToShow(true)
    }


    return (
        <>
        <div className='App'>
        <button className='button' onClick={() => toggleShow(!show)}>
            {show ? 'Hide' : 'Show Code'}
        </button>
        </div>
        
        {show && 
        <div className="code-wrapper">
            <div className='code-p'>
                <p>Zadanie polega na obsługiwaniu 6-cyfrowego kodu z klawiatury numerycznej, umożlwiając jego zapisanie, zresetowanie oraz wyświetlanie zasłoniętej wersji kodu na ekranie.</p>
            </div>
            <h2 className='code-message'>
                {code.length === 6 ? `Zapisz, lub zresetuj`
                : 'Wpisz 6-cyfrowy kod'}
            </h2>
            <div className="code-keyboard">
                <div className="code-keyboard__row">
                    <button className="code-keyboard__button" onClick={() => add('1')}>1</button>
                    <button className="code-keyboard__button" onClick={() => add('2')}>2</button>
                    <button className="code-keyboard__button" onClick={() => add('3')}>3</button>
                </div>
                <div className="code-keyboard__row">
                    <button className="code-keyboard__button" onClick={() => add('4')}>4</button>
                    <button className="code-keyboard__button" onClick={() => add('5')}>5</button>
                    <button className="code-keyboard__button" onClick={() => add('6')}>6</button>
                </div>
                <div className="code-keyboard__row">
                    <button className="code-keyboard__button" onClick={() => add('7')}>7</button>
                    <button className="code-keyboard__button" onClick={() => add('8')}>8</button>
                    <button className="code-keyboard__button" onClick={() => add('9')}>9</button>
                </div>
                <div className="code-keyboard__row">
                    <button className="code-keyboard__button code-keyboard__button--reset" data-value="-99" onClick={reset}>Reset</button>
                    <button className="code-keyboard__button" onClick={() => add('0')}>0</button>
                    <button className="code-keyboard__button code-keyboard__button--save" data-value="99" onClick={save}>{code.length === 6 ? 'Zapisz' : 'Pokaż'}</button>
                </div>
            </div>

            <div className="code-display">
                {toShow ? code : hidden}
            </div>
        </div>
        }
        </>
    )
}