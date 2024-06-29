import { getCurso } from '@/api/cursos';
import Link from 'next/link';
import React from 'react';

type PageParams = {
  params: {
    curso: string;
  };
};

const CursoPage = async ({ params }: PageParams) => {
  const curso = await getCurso(params.curso);

  return (
    <div>
      <h1>Curso selecionado: {curso.nome}</h1>
      <p>{curso.descricao}</p>
      <p>Total de Horas: {curso.total_horas}</p>
      <p>Total de Aulas: {curso.total_aulas}</p>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>
              {aula.descricao}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CursoPage;
