'use client';

import { useState } from 'react';
import TitleStep from './TitleStep';
import SectionStep from './SectionStep';
import SummaryStep from './SummaryStep';

const Wizard = () => {
  const [step, setStep] = useState(1);
  const [projectData, setProjectData] = useState({
    title: '',
    sections: [{ title: '', content: '', code: '', imagePath: '' }],
  });

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  const updateSection = (index, section) => {
    const newSections = [...projectData.sections];
    newSections[index] = section;
    setProjectData({ ...projectData, sections: newSections });
  };

  const addSection = () => {
    setProjectData({
      ...projectData,
      sections: [
        ...projectData.sections,
        { title: '', content: '', code: '', imagePath: '' },
      ],
    });
    setStep(step + 1); // Avanza al siguiente paso después de agregar una sección
  };

  return (
    <div className="wizard-container">
      <div className="wizard-content">
        {step === 1 && (
          <TitleStep projectData={projectData} setProjectData={setProjectData} />
        )}
        {step > 1 && step <= projectData.sections.length + 1 && (
          <SectionStep
            index={step - 2}
            section={projectData.sections[step - 2]}
            updateSection={updateSection}
          />
        )}
        {step === projectData.sections.length + 2 && (
          <SummaryStep projectData={projectData} />
        )}

        <div className="wizard-buttons">
          {step > 1 && (
            <button className="wizard-button" onClick={handlePrevStep}>Anterior</button>
          )}
          {step <= projectData.sections.length + 1 && (
            <>
              <button className="wizard-button" onClick={handleNextStep}>Siguiente</button>
              {step === projectData.sections.length + 1 && (
                <button className="wizard-button" onClick={addSection}>Añadir Sección</button>
              )}
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .wizard-container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
        }
        .wizard-content {
          margin-bottom: 20px;
        }
        .wizard-buttons {
          display: flex;
          justify-content: space-between;
        }
        .wizard-button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #0070f3;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .wizard-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Wizard;
