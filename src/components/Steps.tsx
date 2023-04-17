import { useState } from "react";
import './css/Steps.css'

export const Steps = () => {
    const [show, toggleShow] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        if (currentStep < 4) {
          setCurrentStep(currentStep + 1);
        }
      };

    const handlePrevious = () => {
        if (currentStep > 1) {
          setCurrentStep(currentStep - 1);
        }
      };
    
    
    return (
        <>

            <div className="steps-p">
                <p>Zadanie generuje interaktywne kroki związane z procesem zamawiania, pozwalając na przejście do kolejnych etapów po kliknięciu przycisku "Dalej" i powrót po kliknięciu "Wróć"</p>
            </div>
            <div className="Steps-body">
                <div className="Steps-container">
                    <div className="Steps-main-container">
                        <div className="Steps-step-1"><span>1</span></div>
                        <div className='Steps-connector-container'><div className={`Steps-connector ${currentStep > 1 ? "Steps-active" : ""}`}></div></div>
                        <div className={`Steps-step ${currentStep > 1 ? "Steps-active" : ""}`}><span>2</span></div>
                        <div className="Steps-connector-container"><div className={`Steps-connector ${currentStep > 2 ? "Steps-active" : ""}`}></div></div>
                        <div className={`Steps-step ${currentStep > 2 ? "Steps-active" : ""}`}><span>3</span></div>
                        <div className="Steps-connector-container"><div className={`Steps-connector ${currentStep > 3 ? "Steps-active" : ""}`}></div></div>
                        <div className={`Steps-step ${currentStep > 3 ? "Steps-active" : ""}`}><span>4</span></div>
                    </div>
                    <div className="Steps-second-container">
                        <div className="Steps-second">Koszyk</div>
                        <div className="Steps-second">Dane osobowe</div>
                        <div className="Steps-second">Dostawa</div>
                        <div className="Steps-second">Potwierdzenie</div>
                    </div>
                </div>
                    <div className="Steps-button-container">
                        <button className={`Steps-button-back ${currentStep === 1 ? 'Steps-first' : ''}`} onClick={handlePrevious}>{currentStep === 1 ? '' : 'Wróć'}</button>                        
                        <button className={`Steps-button-next ${currentStep === 4 ? 'Steps-last' : ''}`} onClick={handleNext}>{currentStep === 4 ? '' : 'Dalej'}</button>
                    </div>
            </div>
      </>
    )
}