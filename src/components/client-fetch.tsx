'use client';
import { useEffect, useState } from 'react';

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
};

const ClientFetch = () => {
  const [data, setData] = useState<Produto[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.origamid.online/produtos');
      const json = (await response.json()) as Produto[];
      setData(json);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Cliente Fetch:</h1>
      <ul>
        {data.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {produto.descricao}, R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientFetch;
