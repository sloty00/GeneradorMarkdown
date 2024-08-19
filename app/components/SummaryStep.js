import { useState, useEffect } from 'react';
import generateMarkdown from '../utils/generateMarkdown';

const SummaryStep = ({ projectData }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detecta la preferencia del sistema para el tema oscuro
    const handleThemeChange = (e) => setIsDarkMode(e.matches);
    
    // Inicializa el estado según la preferencia actual
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    // Escucha los cambios en la preferencia del sistema
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  const markdown = generateMarkdown(projectData);

  return (
    <div className={`summary-step ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2>Resumen del Proyecto</h2>
      <pre className="markdown-preview">{markdown}</pre>
      <button className="download-button" onClick={() => downloadMarkdown(markdown)}>Descargar Markdown</button>
      <style jsx>{`
        .summary-step {
          margin-bottom: 20px;
        }
        .markdown-preview {
          white-space: pre-wrap;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ddd;
          overflow-x: auto;
        }
        .download-button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #0070f3;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .download-button:hover {
          background-color: #005bb5;
        }

        /* Estilos para el tema claro */
        .light-mode .markdown-preview {
          background-color: #f7f7f7;
          color: #000;
        }
        .light-mode .download-button {
          background-color: #0070f3;
        }
        .light-mode .download-button:hover {
          background-color: #005bb5;
        }

        /* Estilos para el tema oscuro */
        .dark-mode .markdown-preview {
          background-color: #333;
          color: #fff;
          border-color: #444;
        }
        .dark-mode .download-button {
          background-color: #1d4ed8;
        }
        .dark-mode .download-button:hover {
          background-color: #1e40af;
        }
      `}</style>
    </div>
  );
};

const downloadMarkdown = (content) => {
  const element = document.createElement("a");
  const file = new Blob([content], { type: "text/markdown" });
  element.href = URL.createObjectURL(file);
  element.download = "project.md";
  document.body.appendChild(element);
  element.click();
};

export default SummaryStep;
