'use client';

import { useState, useEffect } from 'react';

const TitleStep = ({ projectData, setProjectData }) => {
  const [title, setTitle] = useState(projectData.title || '');
  const [author, setAuthor] = useState(projectData.author || '');
  const [date, setDate] = useState(projectData.date || '');
  const [developmentTime, setDevelopmentTime] = useState(projectData.developmentTime || '');

  useEffect(() => {
    setTitle(projectData.title || '');
    setAuthor(projectData.author || '');
    setDate(projectData.date || '');
    setDevelopmentTime(projectData.developmentTime || '');
  }, [projectData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="title-step">
      <h2>Título del Proyecto</h2>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Introduce el título del proyecto"
        className="title-input"
      />
      <h2>Autor</h2>
      <input
        type="text"
        name="author"
        value={author}
        onChange={handleChange}
        placeholder="Introduce el autor del proyecto"
        className="title-input"
      />
      <h2>Fecha de Creación</h2>
      <input
        type="date"
        name="date"
        value={date}
        onChange={handleChange}
        className="title-input"
      />
      <h2>H/H De Desarrollo</h2>
      <input
        type="text"
        name="developmentTime"
        value={developmentTime}
        onChange={handleChange}
        placeholder="Introduce el tiempo de desarrollo"
        className="title-input"
      />
      <style jsx>{`
        .title-step {
          margin-bottom: 20px;
        }
        .title-input {
          width: 100%;
          padding: 10px;
          border: 1px solid var(--border-color);
          border-radius: 5px;
          background-color: var(--input-bg-color);
          color: var(--input-text-color);
          margin-bottom: 10px;
        }
        .title-input[type="date"] {
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export default TitleStep;
