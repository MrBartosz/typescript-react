import { MouseEventHandler, useState } from 'react';
import './css/Forest.css'


export const Forest = () => {
    const [isTaskCompleted, setIsTaskCompleted] = useState(false);
    
    const forest = document.querySelectorAll('.forest-tree')
    
    const images = {
        treasure: '💰',
        leafs: '🍃'
      }

  

      const mouseOver: MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLDivElement>) => {
        const targetElement = event.target as HTMLElement;
        if (targetElement.classList.contains('forest-treasure')) {
          targetElement.textContent = images.treasure;
          setIsTaskCompleted(true);
        } else if (targetElement.classList.contains('forest-tree')) {
          targetElement.textContent = images.leafs;
        }
      };

    const handleResetClick = () => {
        forest.forEach((tree) => {
            tree.textContent = '🌲'
            })
            setIsTaskCompleted(false)
    }


    
    return (
    <>
        <div className='forest-p'>
            <p>Zadanie polega na odkrywaniu skarbu przeciągając myszką po drzewach. Po znalezieniu skarbu użytkownik może zresetować grę.</p>
        </div>

        <div className="forest-entry forest-flex-row" onMouseOver={isTaskCompleted ? undefined : mouseOver}>
            <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree forest-treasure">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
        <div className="forest-flex-column">
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
                <div className="forest-tree">🌲</div>
            </div>
            <button className='forest-button' onClick={handleResetClick}>RESET</button>
            <h2 className='forest-message'>
                {isTaskCompleted ? 'Gratulacje, odnalazłeś skarb!' : 'Poszukaj skarbu'}
            </h2>
        </div>
    </>
    )
}