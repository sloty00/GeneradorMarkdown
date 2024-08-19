'use client';

import { useState, useEffect } from 'react';

const SubsectionStep = ({ subsection, handleSubsectionChange }) => {
  const [title, setTitle] = useState(subsection.title || '');
  const [content, setContent] = useState(subsection.content || '');
  const [code, setCode] = useState(subsection.code || '');

  useEffect(() => {
    setTitle(subsection.title || '');
    setContent(subsection.content || '');
    setCode(subsection.code || '');
  }, [subsection]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    handleSubsectionChange('title', newTitle);
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    handleSubsectionChange('content', newContent);
  };

  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);
    handleSubsectionChange('code', newCode);
  };

  return (
    <div className="subsection-step">
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleTitleChange}
        placeholder="Título de la Subsección"
        className="subsection-input"
      />
      <textarea
        name="content"
        value={content}
        onChange={handleContentChange}
        placeholder={`Contenido de la Subsección (puede incluir listas y enumeraciones)\n\nEjemplo:\n\n- Primer ítem\n- Segundo ítem\n  - Sub-ítem\n  - Otro sub-ítem\n- Tercer ítem\n\nO bien:\n\n1. Primer ítem\n2. Segundo ítem\n   1. Sub-ítem\n   2. Otro sub-ítem\n3. Tercer ítem`}
        className="subsection-textarea"
      />
      <textarea
        name="code"
        value={code}
        onChange={handleCodeChange}
        placeholder="Código de la Subsección"
        className="subsection-textarea"
      />
      <style jsx>{`
        .subsection-step {
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid var(--border-color);
          border-radius: 5px;
        }
        .subsection-input, .subsection-textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid var(--border-color);
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .subsection-input {
          background-color: var(--input-bg-color);
          color: var(--input-text-color);
        }
        .subsection-textarea {
          background-color: var(--input-bg-color);
          color: var(--input-text-color);
          min-height: 100px;
          resize: vertical;
        }
      `}</style>
    </div>
  );
};

export default SubsectionStep;
