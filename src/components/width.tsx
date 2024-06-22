'use client';
import React, { useEffect, useState } from 'react';

const Width = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [ativo, setAtivo] = useState(false);
  return (
    <div>
      <h2 style={{ color: ativo ? 'tomato' : 'green' }}>
        Largura da tela = {width}
      </h2>
      <button onClick={() => setAtivo((b) => !b)}>Ativar</button>
    </div>
  );
};

export default Width;
