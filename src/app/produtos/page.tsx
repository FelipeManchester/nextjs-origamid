import Menu from '@/components/Menu';
import Link from 'next/link';
import React from 'react';

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
};

const ProdutosPage = async () => {
  const response = await fetch(`https://api.origamid.online/produtos/`);
  const data = (await response.json()) as Produto[];
  return (
    <div>
      <Menu />
      <h1>ProdutosPage</h1>
      <ul>
        {data.map((produto) => (
          <li key={produto.id}>
            <Link href={`/produtos/${produto.id}`}>{produto.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProdutosPage;
