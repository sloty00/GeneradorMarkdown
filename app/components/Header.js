'use client';

import Image from 'next/image';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Image src="/images/LogoVarto.jpg" alt="Logotipo de la Empresa" width={90} height={90} />
        <h1>Generador de Markdown</h1>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          padding: 20px;
          background-color: var(--header-bg-color);
          color: var(--header-text-color);
          border-bottom: 1px solid var(--border-color);
        }
        .logo-container {
          display: flex;
          align-items: center;
        }
        .logo-container img {
          margin-right: 10px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
      `}</style>
    </header>
  );
};

export default Header;
