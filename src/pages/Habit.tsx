import './Habit.css'

import { useState, useEffect } from "react";
import { keyboardKey } from "@testing-library/user-event";
import moment from 'moment';

export const Habit = () => {
    const [habitOn, setHabitOn] = useState(false);
    const [habit, setHabit] = useState('');
    const [habitAlert, setHabitAlert] = useState(false);
    const [date, setDate] = useState(moment());
    const [daysDone, setDaysDone] = useState(0)

    const checkboxChange = (event: any) => {
        if (event.target.checked === true) {
            setDaysDone(daysDone + 1)
        }
        else {
            setDaysDone(daysDone - 1)
        }
    }

    const previousMonth = () => {
        const newDate = moment(date).subtract(1, 'months'); // cofnięcie daty o jeden miesiąc
        setDate(newDate);
        setDaysDone(0);
    }

    const nextMonth = () => {
        const newDate = moment(date).add(1, 'months'); // cofnięcie daty o jeden miesiąc
        setDate(newDate);
        setDaysDone(0);
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setHabit(e.target.value)
        
    }
    const deleteButton = () => {
        setHabitOn(false);
        setHabit('');
        setDaysDone(0);
    }

    const getStarted = () => {
        if (habit.length > 0) {
            setHabitOn(true)
        }
        else {
            setHabitAlert(true)
        }
    }

    function handleKeyDown(event: keyboardKey) {
        if (event.key === "Enter") {
           getStarted();
        }
      }
    useEffect(() => {
        if (habit.length > 0) {
            setHabitAlert(false)
        }  
    }, [habit])

    const daysInMonth = moment(date).daysInMonth(); // liczba dni w danym miesiącu
    const days = Array.from({ length: daysInMonth }, (_, i) => moment(date).date(i + 1));

    return (
    <div className="Habit-body">
      {!habitOn &&
      <div>
        <div className="Habit-title-container">
            <div className="Habit-title">Zacznij pracę nad swoim nawykiem</div>
        </div>
        <div className="Habit-title-container">
            <input className="Habit-type" type='text' placeholder="Wpisz Nawyk" onChange={onChange} onKeyDown={handleKeyDown}></input>
        </div>    
        <div className="Habit-title-container">
            <button className="Habit-button" onClick={getStarted}>Rozpocznij</button>
        </div>
            {habitAlert &&
            <div className="Habit-input-alert-container">
                <div className="Habit-input-alert">Nawyk jest pusty</div>
            </div>
            }
      </div>
      }
      

      {habitOn &&
      
      <div className="HabitOn-body">
        <div className="HabitOn-container">
            <div className="HabitOn-title">Twój nawyk:<br/><b>{habit}</b></div>
            
            <div className="HabitOn-main-container">
                <div className="HabitOn-main-previous-next">
                    <button className="HabitOn-previous-button" onClick={previousMonth}>Poprzedni</button>
                    <button className="HabitOn-next-button" onClick={nextMonth}>Następny</button>
                </div>
                <div className="HabitOn-data">
                    <div className="HabitOn-month">Data: {date.format('MM.YYYY')}</div>
                    <div className="HabitOn-month">{daysDone}/{daysInMonth}</div>
                </div>
                <div className="HabitOn-days-div">
                    <ul className="HabitOn-days-list">
                        {days.slice(0, daysInMonth - 15).map(day => (
                        <li key={day.format('YYYY-MM-DD')}>
                        <label htmlFor={day.format('YYYY-MM-DD')}>{day.format('dddd, DD-MM')}</label>
                        <input className='HabitOn-checkbox' type="checkbox" id={day.format('YYYY-MM-DD')} onChange={checkboxChange}/>
                        </li>
                        ))}
                    </ul>
                    <ul className="HabitOn-days-list">
                        {days.slice(daysInMonth - 15).map(day => (
                            <li key={day.format('YYYY-MM-DD')}>
                                <label className='checkbox' htmlFor={day.format('YYYY-MM-DD')}>{day.format('dddd, DD-MM')}</label>
                                <input className='HabitOn-checkbox form-check-input' type="checkbox" id={day.format('YYYY-MM-DD')} onChange={checkboxChange} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="HabitOn-delete-button">
                <button onClick={deleteButton}>Usuń Nawyk</button>
            </div>

        </div>
      </div>
      
      }

    </div>
    )
}