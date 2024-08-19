'use client';

import { useEffect, useState } from 'react';
import Wizard from './components/Wizard';
import LoadingScreen from './components/LoadingScreen'; // Ajusta la ruta si es necesario
import Footer from './components/Footer';
import Header from './components/Header'; // Importa el nuevo Header

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de 2 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="page-container">
          <Header />
          <Wizard />
        </div>
      )}
      <style jsx>{`
        .page-container {
          margin: 20px; /* Ajusta el margen según sea necesario */
          padding: 20px; /* Opcional: agrega padding si es necesario */
        }
      `}</style>
      <Footer />
    </>
  );
}

