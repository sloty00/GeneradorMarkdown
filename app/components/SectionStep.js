'use client';

import SubsectionStep from './SubsectionStep';
import ImageUploader from './ImageUploader';

const SectionStep = ({ index, section, updateSection }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSection(index, { ...section, [name]: value });
  };

  const handleImageUpload = (imagePath) => {
    updateSection(index, { ...section, imagePath });
  };

  const handleSubsectionChange = (subsectionIndex, name, value) => {
    const updatedSubsections = [...(section.subsections || [])];
    updatedSubsections[subsectionIndex] = {
      ...updatedSubsections[subsectionIndex],
      [name]: value,
    };
    updateSection(index, { ...section, subsections: updatedSubsections });
  };

  const handleAddSubsection = () => {
    const newSubsection = { title: '', content: '', code: '' };
    const updatedSubsections = section.subsections
      ? [...section.subsections, newSubsection]
      : [newSubsection];
    updateSection(index, { ...section, subsections: updatedSubsections });
  };

  return (
    <div className="section-step">
      <h2>Sección {index + 1}</h2>
      <input
        type="text"
        name="title"
        value={section.title || ''}
        onChange={handleChange}
        placeholder="Título de la Sección"
        className="section-input"
      />
      <textarea
        name="content"
        value={section.content || ''}
        onChange={handleChange}
        placeholder={`Contenido de la Sección (puede incluir listas y enumeraciones)\n\nEjemplo:\n\n- Primer ítem\n- Segundo ítem\n  - Sub-ítem\n  - Otro sub-ítem\n- Tercer ítem\n\nO bien:\n\n1. Primer ítem\n2. Segundo ítem\n   1. Sub-ítem\n   2. Otro sub-ítem\n3. Tercer ítem`}
        className="section-textarea"
      />
      <textarea
        name="code"
        value={section.code || ''}
        onChange={handleChange}
        placeholder="Código (línea por línea)"
        className="section-textarea"
      />
      <ImageUploader onUpload={handleImageUpload} />
      <button className="add-subsection-button" onClick={handleAddSubsection}>
        Añadir Subsección
      </button>
      {section.subsections && section.subsections.map((sub, subIndex) => (
        <SubsectionStep
          key={subIndex}
          subsection={sub}
          handleSubsectionChange={(name, value) => handleSubsectionChange(subIndex, name, value)}
        />
      ))}
      <style jsx>{`
        :root {
          --bg-color: #fff;
          --text-color: #000;
          --input-bg-color: #f0f0f0;
          --input-text-color: #000;
          --textarea-bg-color: #f0f0f0;
          --textarea-text-color: #000;
        }
        
          .add-subsection-button {
            padding: 10px 20px;
            margin-top: 10px;
            border: none;
            border-radius: 5px;
            background-color: #0070f3;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .add-subsection-button:hover {
            background-color: #005bb5;
            transform: scale(1.05);
          }

          .add-subsection-button:active {
            background-color: #003f88;
            transform: scale(0.98);
          }

          .add-subsection-button:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.5);
          }
        
        .section-step {
          margin-bottom: 20px;
        }
        
        .section-input,
        .section-textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        
        .section-input {
          background-color: var(--input-bg-color);
          color: var(--input-text-color);
        }
        
        .section-textarea {
          background-color: var(--textarea-bg-color);
          color: var(--textarea-text-color);
          height: 100px;
        }

        .dark-mode {
          --bg-color: #333;
          --text-color: #fff;
          --input-bg-color: #444;
          --input-text-color: #fff;
          --textarea-bg-color: #444;
          --textarea-text-color: #fff;
        }

        body.dark-mode .section-step {
          background-color: var(--bg-color);
          color: var(--text-color);
        }
      `}</style>
    </div>
  );
};

export default SectionStep;
