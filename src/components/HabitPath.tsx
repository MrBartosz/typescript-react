import { Link } from "react-router-dom";
import './css/HabitPath.css';

export const HabitPath = () => {
    return (
        <>
            <div className="App">
                <button className="button button-habit" style={{ padding: 0, border: 'none', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                    <Link to='/Habit' className="button-link" style={{ color:'white', display: 'block', width: '100%', height: '100%', padding: '15px 25px', backgroundImage: "linear-gradient(to bottom, rgb(87, 87, 86), #bc9864)", borderRadius: '15px' }}>Move to Project Habit</Link>
                </button>
            </div>
        </>
        )
    }