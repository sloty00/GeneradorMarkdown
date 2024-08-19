'use client';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Generador de Markdown - Versión 1.0.0</p>
        <p>Desarrollado por Jose Vargas Oyarzun</p>
        <p>Tiempo de desarrollo: 2 horas</p>
        <a href="https://github.com/sloty00" target="_blank" rel="noopener noreferrer">
          Ver Github
        </a>
      </div>
      <style jsx>{`
        .footer {
          padding: 20px;
          background-color: var(--footer-bg-color);
          color: var(--footer-text-color);
          text-align: center;
          border-top: 1px solid var(--border-color);
        }
        .footer-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .footer a {
          color: var(--link-color);
          text-decoration: none;
          font-weight: bold;
        }
        .footer a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
