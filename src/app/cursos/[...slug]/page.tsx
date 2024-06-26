// cursos/[...slug]/page.tsx
import React from 'react';
import { GetServerSideProps } from 'next';

type PageParams = {
  params: {
    slug: string;
  };
};

type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

const CursoPage = async ({ params }: PageParams) => {
  const { slug } = params;
  const response = await fetch(`https://api.origamid.online/cursos/${slug}`);
  const data = (await response.json()) as Curso;

  return (
    <div>
      <h1>{data.nome}</h1>
      <p>{data.descricao}</p>
      <p>Total de Aulas: {data.total_aulas}</p>
      <p>Total de Horas: {data.total_horas}</p>
    </div>
  );
};

export default CursoPage;
