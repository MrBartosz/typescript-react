import { useState } from "react";
import "./css/Habit.css";


export const Habit = () => {
    const [show, toggleShow] = useState(false);


    return (
    <>
        <div className="App">
            <button className="button" onClick={() => toggleShow(!show)}>
            {show ? "Hide" : "Show Project Habit"}
            </button>
        </div>
        {show && 
        <div>
            Elo
        </div>
        }
        
      
    </>
    )
}