import React from 'react';
type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
};
const ServerFetch = async () => {
  const response = await fetch('https://api.origamid.online/produtos');
  const data = (await response.json()) as Produto[];

  return (
    <div>
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

export default ServerFetch;
