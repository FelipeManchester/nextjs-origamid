// cursos/[...slug]/page.tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

type PageParams = {
  params: {
    slug: string;
  };
};

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: Aula[];
};

const CursoPage = async ({ params }: PageParams) => {
  const { slug } = params;
  const response = await fetch(`https://api.origamid.online/cursos/${slug}`);
  const data = (await response.json()) as Curso;
  console.log(data);

  return (
    <div>
      <h1>{data.nome}</h1>
      <p>{data.descricao}</p>
      <p>Total de Aulas: {data.total_aulas}</p>
      <p>Total de Horas: {data.total_horas}</p>
      {data.aulas.map((aula) => (
        <li key={aula.id}>
          <Link href={`/cursos/${data.slug}/${aula.slug}`}>{aula.nome}</Link>
          <p>{aula.descricao}</p>
          <p>Tempo: {aula.tempo}</p>
        </li>
      ))}
    </div>
  );
};

export default CursoPage;
