import "./Habit.css";
import { useState, useEffect } from "react";
import { keyboardKey } from "@testing-library/user-event";
import moment from "moment";

export const Habit = () => {
  const [habitOn, setHabitOn] = useState(false);
  const [habit, setHabit] = useState("");
  const [habitAlert, setHabitAlert] = useState(false);
  const [date, setDate] = useState(moment());
  const [daysDone, setDaysDone] = useState(0);
  const [completedDays, setCompletedDays] = useState<string[]>([]);
  const [completedHabits, setCompletedHabits] = useState<string[]>([]);

  useEffect(() => {
    if (habitOn) {
      localStorage.setItem(`completed-${habit}`, "true");
    }
    else {
      const keys = Object.keys(localStorage);
      const habits = keys.filter((key) => key.startsWith("completed-")).map((key) => key.replace("completed-", ""));
      setCompletedHabits(habits);
    }
  }, [habitOn]);


  const checkboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.id;
    if (event.target.checked) {
      setDaysDone(daysDone + 1);
      setCompletedDays((prevCompletedDays) => [...prevCompletedDays, selectedDate]);
    } else {
      setDaysDone(daysDone - 1);
      setCompletedDays((prevCompletedDays) => prevCompletedDays.filter((day) => day !== selectedDate));
    }
  };


  const previousMonth = () => {
    const newDate = moment(date).subtract(1, "months");
    setDate(newDate);
    setDaysDone(0);
  };

  const nextMonth = () => {
    const newDate = moment(date).add(1, "months");
    setDate(newDate);
    setDaysDone(0);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHabit(e.target.value);
  };

  const deleteButton = () => {
  const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    if (key.startsWith(`${habit}-`) || key === `completed-${habit}`) {
      localStorage.removeItem(key);
    }
  });
  setHabit('');
  setHabitOn(false);
};

  const getStarted = () => {
    if (habit.length > 0) {
      setHabitOn(true);
    } else {
      setHabitAlert(true);
    }
  };

  function handleKeyDown(event: keyboardKey) {
    if (event.key === "Enter") {
      getStarted();
    }
  }
  const deleteHabit = (key: string) => {
    localStorage.removeItem(key);
    setCompletedHabits((prevCompletedHabits) => prevCompletedHabits.filter((habit) => habit !== key));
  
    const keys = Object.keys(localStorage);
    keys.forEach((storageKey) => {
      if (storageKey.includes(key)) {
        localStorage.removeItem(storageKey);
      }
    });
  };

  const goBack = () => {
    setHabit('');
    setHabitOn(false);
  }

  useEffect(() => {
    if (habit.length > 0) {
      setHabitAlert(false);
      setDaysDone(0);
      setCompletedDays([]);
    }
  }, [habit]);

  const handleHabitClick = (completedHabit: string) => {
    setHabit(completedHabit);
    setHabitOn(true);
  };
  
  const daysInMonth = moment(date).daysInMonth();
  const days = Array.from({ length: daysInMonth }, (_, i) => moment(date).date(i + 1));

  useEffect(() => {
    const currentMonth = moment(date).format("YYYY-MM");
    const storedDaysDone = localStorage.getItem(`${currentMonth}-${habit}`);
    const storedCompletedDays = localStorage.getItem(`${currentMonth}-completed-${habit}`);
    if (storedDaysDone) {
      setDaysDone(parseInt(storedDaysDone, 10));
    }
    if (storedCompletedDays) {
      setCompletedDays(JSON.parse(storedCompletedDays));
    }
  }, [date, habit]);

  useEffect(() => {
    const currentMonth = moment(date).format("YYYY-MM");
    localStorage.setItem(`${currentMonth}-${habit}`, daysDone.toString());
    localStorage.setItem(`${currentMonth}-completed-${habit}`, JSON.stringify(completedDays));
  }, [daysDone, completedDays, date, habit]);

  return (
    <div className="Habit-body">
      {!habitOn && (
        <div>
          <div className="Habit-title-container">
            <div className="Habit-title">Zacznij pracę nad swoim nawykiem</div>
          </div>
          <div className="Habit-title-container">
            <input className="Habit-type" type="text" placeholder="Wpisz Nawyk" onChange={onChange} onKeyDown={handleKeyDown} />
          </div>
          <div className="Habit-title-container">
            <button className="Habit-button" onClick={getStarted}>
              Rozpocznij
            </button>
          </div>
          {habitAlert && (
            <div className="Habit-input-alert-container">
              <div className="Habit-input-alert">Nawyk jest pusty</div>
            </div>
          )}


          {!habitAlert && (
                      <div className="Habit-input-alert-container">
                          <div className="Habit-input-alert">
                              <h2>Zapisane Nawyki:</h2>
                              {completedHabits.map((completedHabit) => (
                              <p key={completedHabit}>{completedHabit}
                              <button onClick={() => handleHabitClick(completedHabit)}>Wybierz</button>
                              <button key={completedHabit} onClick={() => deleteHabit(completedHabit)}>Usuń</button>
                              </p>
                              ))}
                          </div>
                      </div>
                  )}
          </div>
      )}

      {habitOn && (
        <div className="HabitOn-body">
          <div className="HabitOn-container">
            <div className="HabitOn-title">
              Twój nawyk:
              <br />
              <b>{habit}</b>
            </div>

            <div className="HabitOn-main-container">
              <div className="HabitOn-main-previous-next">
                <button className="HabitOn-previous-button" onClick={previousMonth}>
                  Poprzedni
                </button>
                <button className="HabitOn-next-button" onClick={nextMonth}>
                  Następny
                </button>
              </div>
              <div className="HabitOn-data">
                <div className="HabitOn-month">Data: {date.format("MM.YYYY")}</div>
                <div className="HabitOn-month">
                  {daysDone}/{daysInMonth}
                </div>
              </div>
              <div className="HabitOn-days-div">
                <ul className="HabitOn-days-list">
                  {days.slice(0, daysInMonth - 15).map((day) => (
                    <li key={day.format("YYYY-MM-DD")}>
                      <label htmlFor={day.format("YYYY-MM-DD")}>{day.format("dddd, DD-MM")}</label>
                      <input
                        className="HabitOn-checkbox"
                        type="checkbox"
                        id={day.format("YYYY-MM-DD")}
                        onChange={checkboxChange}
                        checked={completedDays.includes(day.format("YYYY-MM-DD"))}
                      />
                    </li>
                  ))}
                </ul>
                <ul className="HabitOn-days-list">
                  {days.slice(daysInMonth - 15).map((day) => (
                    <li key={day.format("YYYY-MM-DD")}>
                      <label className="checkbox" htmlFor={day.format("YYYY-MM-DD")}>
                        {day.format("dddd, DD-MM")}
                      </label>
                      <input
                        className="HabitOn-checkbox form-check-input"
                        type="checkbox"
                        id={day.format("YYYY-MM-DD")}
                        onChange={checkboxChange}
                        checked={completedDays.includes(day.format("YYYY-MM-DD"))}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="HabitOn-delete-button">
              <button onClick={deleteButton}>Usuń Nawyk</button>
            </div>
            <div className="HabitOn-delete-button" style={{ marginTop:20 }}>
              <button onClick={goBack}>Powrót</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}