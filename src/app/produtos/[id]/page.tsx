import Menu from '@/components/Menu';
import React from 'react';

type PageParams = {
  params: {
    id: string;
  };
};

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
};
const ProdutoPage = async ({ params }: PageParams) => {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`,
  );
  const data = (await response.json()) as Produto;
  return (
    <div>
      <Menu />
      <h1>Produto:</h1>
      <h3>{data.nome}</h3>
      <p>R$ {data.preco}</p>
      <p>{data.descricao}</p>
    </div>
  );
};

export default ProdutoPage;
