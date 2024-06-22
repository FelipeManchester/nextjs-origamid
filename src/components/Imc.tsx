'use client';
import React, { FormEvent, useState } from 'react';

const Imc = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    if (total > '25') {
      setResultado(total + ' você está acima do peso ideal.');
    } else {
      setResultado(total + ' você está no peso ideal.');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='altura'>Altura: {altura}</label>
        <input
          type='number'
          id='altura'
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <label htmlFor='altura'>Peso: {peso}</label>
        <input
          type='number'
          id='peso'
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <button>Calcular</button>
      </form>
      <p>Seu IMC: {resultado}</p>
    </div>
  );
};

export default Imc;
