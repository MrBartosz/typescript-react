import { useState } from "react";
import "./css/Alert.css";

export const Alert = () => {
  const [divList, setDivList] = useState<{ id: number; color: string; content: string }[]>([]);

  let color: string;
  let content: string;

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
  
  
    if (randomNumber === 1) {
      color = "red";
      content = "this is error";
    } else if (randomNumber === 2) {
      color = "yellow";
      content = "this is warning";
    } else if (randomNumber === 3) {
      color = "green";
      content = "this is success";
    }
  
    setDivList( prevDivList => [
        ...prevDivList,
        { id: prevDivList.length, color: color, content: content }
    ]);
  
    setTimeout(() => {
      setDivList(prevDivList => prevDivList.filter((div) => div.id !== prevDivList.length - 1));
    }, 5000);
  };

  const deleteButton = (id: number) => {
    const filteredDivList = divList.filter((div) => div.id !== id);
    setDivList(filteredDivList);
  };

  return (
    <>
      <div className="alert-p">
        <p>Zadanie generuje losowe alerty po kliknięciu w przycisk.</p>
      </div>
        <div className="Alert-body">
          <button onClick={handleClick} className="Alert-button">
            Dodaj Losowy Alert
          </button>
          {divList.map((div) => (
            <div
              key={div.id}
              className="Alert-div"
              style={{ color: div.color }}
              onClick={() => deleteButton(div.id)}
            >
              {div.content}
            </div>
          ))}
          <p>Naciśnij na alert, aby go usunąć, lub odczekaj 5 sekund by usunął się automatycznie. </p>
        </div>
      )
    </>
  );
};