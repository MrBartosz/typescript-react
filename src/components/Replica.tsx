import { useState, useEffect } from "react";
import './css/Replica.css'


export const Replica = () => {

    const [isSorted, setSort] = useState(false);
    const [show, toggleShow] = useState(false);
    const [sendRequest, setSendRequest] = useState(false);
    
    const fakeCanvas = document.querySelectorAll('.fake-canvas .pixel')
    const original = document.querySelectorAll('.original-canvas .pixel')
    
    useEffect(() => {
        
        if(sendRequest) {   
            (isSorted ? unSort(): sort())
        };

        function sort() {
            original.forEach((el,i) => {
                el.classList.contains('pixel-dot') && 
                (fakeCanvas[i].classList.add('pixel-dot'))
            })
            setSort(!isSorted)
        }

        function unSort() {
            original.forEach((el,i) => {
                el.classList.contains('pixel-dot') && 
                (fakeCanvas[i].classList.remove('pixel-dot'))
            })
            setSort(!isSorted)
        }
        setSendRequest(false)

    },[sendRequest])


    


     return (
    <>

    <div className='App'>
        <button className='button' onClick={() => toggleShow(!show)}>
            {show ? 'Hide' : 'Show Replica'}
        </button>
    </div>
        {show &&
        <div className="replica_app">
            <h2 className="replica-h2">Płótno:</h2>
            <div className="flex-column fake-canvas">
                <div className="flex-row">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="flex-row">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="flex-row">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="flex-row">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="flex-row">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="flex-row">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="flex-row">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                </div>
            <h2 className="replica-h2">Oryginał:</h2>
                <div className="flex-column original-canvas">
                    <div className="flex-row">
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                    </div>
                    <div className="flex-row">
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                    </div>
                    <div className="flex-row">
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                    </div>
                    <div className="flex-row">
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                    </div>
                    <div className="flex-row">
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                    </div>
                    <div className="flex-row">
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                        <div className="pixel pixel-dot"></div>
                        <div className="pixel"></div>
                    </div>
                    <div className="flex-row">
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                    </div>
                </div>
            </div>
            }
            {show && 
                <div className="replica_button_div">
                    <button className="replica_button" onClick={() => setSendRequest(true)}>{isSorted ? 'Unsort' : 'Sort'}</button>
                </div>
            }
    </>
  );
}